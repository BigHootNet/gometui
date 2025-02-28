// src/app/api/albums/file/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { promises as fs } from 'fs';
import path from 'path';
import { AlbumFile } from '@/app/admin/types';

export async function DELETE(req: NextRequest) {
  try {
    const { albumId, fileId } = await req.json();
    if (!albumId || !fileId) {
      return NextResponse.json({ error: 'Missing albumId or fileId' }, { status: 400 });
    }

    // Récupérer le fichier avec typage explicite
    const file = db.prepare('SELECT id, file_path FROM album_files WHERE id = ? AND album_id = ?').get(fileId, albumId) as AlbumFile | undefined;
    
    // Vérifier si le fichier existe
    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Maintenant que file est garanti non-undefined, file_path est accessible
    const filePath = path.join(process.cwd(), 'public', file.file_path);
    try {
      await fs.unlink(filePath);
    } catch (err) {
      console.warn(`Failed to delete file ${filePath}: ${err}`);
    }

    const result = db.prepare('DELETE FROM album_files WHERE id = ? AND album_id = ?').run(fileId, albumId);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'File not found or already deleted' }, { status: 404 });
    }

    return NextResponse.json({ message: 'File deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/albums/file:', error);
    return NextResponse.json({ error: 'Failed to delete file', details: String(error) }, { status: 500 });
  }
}