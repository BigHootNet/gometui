// src/app/api/uploads/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import db from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const userId = formData.get('userId') as string;
    const type = formData.get('type') as string; // 'avatar' ou 'album'

    if (!file || !userId || !type) {
      return NextResponse.json({ error: 'Missing file, userId, or type' }, { status: 400 });
    }

    const uploadDir = path.join(process.cwd(), 'public/uploads');
    await fs.mkdir(uploadDir, { recursive: true });

    const fileExtension = path.extname(file.name);
    const fileName = `${uuidv4()}${fileExtension}`;
    const filePath = path.join(uploadDir, fileName);

    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, buffer);

    const relativePath = `/uploads/${fileName}`;

    if (type === 'avatar') {
      db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(relativePath, userId);
      return NextResponse.json({ message: 'Avatar uploaded', path: relativePath }, { status: 201 });
    } else if (type === 'album') {
      const title = formData.get('title') as string || 'Untitled Album';
      const albumId = uuidv4();
      const timestamp = Math.floor(Date.now() / 1000);
      db.prepare('INSERT INTO albums (id, user_id, title, file_path, created_at) VALUES (?, ?, ?, ?, ?)')
        .run(albumId, userId, title, relativePath, timestamp);
      return NextResponse.json({ message: 'Album uploaded', id: albumId, path: relativePath }, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid type' }, { status: 400 });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file', details: String(error) }, { status: 500 });
  }
}