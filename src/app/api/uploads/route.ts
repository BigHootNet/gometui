// src/app/api/uploads/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    console.log('Unauthorized access to /api/uploads - No session or user');
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const userId = formData.get('userId') as string;
    const type = formData.get('type') as string; // 'media'
    const folder = formData.get('folder') as string || 'Dossier principal'; // Dossier par défaut
    const tags = JSON.parse(formData.get('tags') as string || '[]') as string[]; // Tags sous forme de tableau
    const description = formData.get('description') as string || ''; // Description

    console.log('Received upload request:', { files: files.length, userId, type, folder, tags, description });

    if (!files || files.length === 0 || !userId || !type) {
      console.log('Validation failed: Missing files, userId, or type');
      return NextResponse.json({ error: 'Missing files, userId, or type' }, { status: 400 });
    }
    if (userId !== session.user.id) {
      console.log('Forbidden: User ID mismatch', { requestedUserId: userId, sessionUserId: session.user.id });
      return NextResponse.json({ error: 'Forbidden: User ID mismatch' }, { status: 403 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'video/webm'];
    const maxSize = 10 * 1024 * 1024; // 10 Mo
    for (const file of files) {
      console.log('Checking file:', { name: file.name, type: file.type, size: file.size });
      if (!allowedTypes.includes(file.type)) {
        console.log('Invalid file type:', file.type);
        return NextResponse.json({ error: `Invalid file type: ${file.type}` }, { status: 400 });
      }
      if (file.size > maxSize) {
        console.log('File too large:', { name: file.name, size: file.size });
        return NextResponse.json({ error: `File too large: ${file.name}` }, { status: 400 });
      }
    }

    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const filePaths = [];
    for (const file of files) {
      const fileExtension = path.extname(file.name);
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(filePath, buffer);
      const relativePath = `/uploads/${fileName}`;
      filePaths.push(relativePath);

      const mediaId = uuidv4();
      const mediaType = file.type.startsWith('image') ? 'image' : 'video';
      const timestamp = Math.floor(Date.now() / 1000);
      db.prepare(
        'INSERT INTO media (id, file_path, type, uploaded_at, user_id, associated_with, description, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
      ).run(mediaId, relativePath, mediaType, timestamp, userId, folder, description, JSON.stringify(tags));
    }

    if (type === 'media' && (session.user.role === 'admin' || session.user.role === 'superadmin')) {
      return NextResponse.json({ message: 'Files uploaded for media manager', filePaths }, { status: 201 });
    }

    console.log('Invalid type or insufficient permissions');
    return NextResponse.json({ error: 'Invalid type or insufficient permissions' }, { status: 400 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file', details: String(error) }, { status: 500 });
  }
}