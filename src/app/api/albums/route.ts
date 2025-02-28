// src/app/api/albums/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { promises as fs } from 'fs';
import path from 'path';
import { Album, AlbumFile } from '@/app/admin/types';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const albums = db
      .prepare('SELECT id, user_id, title, created_at FROM albums ORDER BY created_at DESC')
      .all() as Album[];
    
    const albumsWithFiles = albums.map((album: Album) => {
      const files = db
        .prepare('SELECT id, file_path, uploaded_at FROM album_files WHERE album_id = ?')
        .all(album.id) as AlbumFile[];
      return { ...album, files };
    });

    return NextResponse.json({ albums: albumsWithFiles });
  } catch (error) {
    console.error('Error in GET /api/albums:', error);
    return NextResponse.json({ error: 'Failed to fetch albums', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { id, title } = await req.json();
    if (!id || !title) {
      return NextResponse.json({ error: 'Missing id or title' }, { status: 400 });
    }
    const result = db.prepare('UPDATE albums SET title = ? WHERE id = ?').run(title, id);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Album updated' });
  } catch (error) {
    console.error('Error in PUT /api/albums:', error);
    return NextResponse.json({ error: 'Failed to update album', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: 'Missing album id' }, { status: 400 });
    }

    const files = db.prepare('SELECT file_path FROM album_files WHERE album_id = ?').all(id) as AlbumFile[];
    for (const file of files) {
      const filePath = path.join(process.cwd(), 'public', file.file_path);
      try {
        await fs.unlink(filePath);
      } catch (err) {
        console.warn(`Failed to delete file ${filePath}: ${err}`);
      }
    }

    db.prepare('DELETE FROM album_files WHERE album_id = ?').run(id);
    const result = db.prepare('DELETE FROM albums WHERE id = ?').run(id);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Album deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/albums:', error);
    return NextResponse.json({ error: 'Failed to delete album', details: String(error) }, { status: 500 });
  }
}