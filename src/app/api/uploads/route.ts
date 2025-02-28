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
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const files = formData.getAll('files') as File[];
    const userId = formData.get('userId') as string;
    const type = formData.get('type') as string;

    if (!files || files.length === 0 || !userId || !type) {
      return NextResponse.json({ error: 'Missing files, userId, or type' }, { status: 400 });
    }
    if (userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden: User ID mismatch' }, { status: 403 });
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'video/webm'];
    const maxSize = 10 * 1024 * 1024; // 10 Mo
    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json({ error: `Invalid file type: ${file.type}` }, { status: 400 });
      }
      if (file.size > maxSize) {
        return NextResponse.json({ error: `File too large: ${file.name}` }, { status: 400 });
      }
    }

    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    if (type === 'avatar') {
      const file = files[0];
      const fileExtension = path.extname(file.name);
      const fileName = `${uuidv4()}${fileExtension}`;
      const filePath = path.join(uploadDir, fileName);
      const buffer = Buffer.from(await file.arrayBuffer());
      await fs.writeFile(filePath, buffer);
      const relativePath = `/uploads/${fileName}`;
      db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(relativePath, userId);
      return NextResponse.json({ message: 'Avatar uploaded', path: relativePath }, { status: 201 });
    } else if (type === 'album' && (session.user.role === 'admin' || session.user.role === 'superadmin')) {
      let targetAlbumId = formData.get('albumId') as string | null;
      if (!targetAlbumId) {
        const title = formData.get('title') as string;
        if (!title) {
          return NextResponse.json({ error: 'Missing album title for new album' }, { status: 400 });
        }
        targetAlbumId = uuidv4();
        const timestamp = Math.floor(Date.now() / 1000);
        db.prepare('INSERT INTO albums (id, user_id, title, created_at) VALUES (?, ?, ?, ?)')
          .run(targetAlbumId, userId, title, timestamp);
      }

      const filePaths = [];
      for (const file of files) {
        const fileExtension = path.extname(file.name);
        const fileName = `${uuidv4()}${fileExtension}`;
        const filePath = path.join(uploadDir, fileName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(filePath, buffer);
        const relativePath = `/uploads/${fileName}`;

        const fileId = uuidv4();
        const timestamp = Math.floor(Date.now() / 1000);
        db.prepare('INSERT INTO album_files (id, album_id, file_path, uploaded_at) VALUES (?, ?, ?, ?)')
          .run(fileId, targetAlbumId, relativePath, timestamp);
        filePaths.push(relativePath);
      }

      return NextResponse.json({ message: 'Files added to album', id: targetAlbumId, filePaths }, { status: 201 });
    } else if (type === 'carousel' && (session.user.role === 'admin' || session.user.role === 'superadmin')) {
      const filePaths = [];
      for (const file of files) {
        const fileExtension = path.extname(file.name);
        const fileName = `${uuidv4()}${fileExtension}`;
        const filePath = path.join(uploadDir, fileName);
        const buffer = Buffer.from(await file.arrayBuffer());
        await fs.writeFile(filePath, buffer);
        const relativePath = `/uploads/${fileName}`;
        filePaths.push(relativePath);
      }
      return NextResponse.json({ message: 'Files uploaded for carousel', filePaths }, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid type or insufficient permissions' }, { status: 400 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file', details: String(error) }, { status: 500 });
  }
}