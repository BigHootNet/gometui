// src/app/api/albums/file/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { promises as fs } from 'fs';
import path from 'path';
import { AlbumFile } from '@/app/admin/types';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../pages/api/auth/[...nextauth]';

// Fonction utilitaire pour valider un UUID
function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(uuid);
}

// Type guard pour vérifier si un objet est une instance de Error
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

// Vérifier si le chemin est valide pour un fichier uploadé
function isValidFilePath(filePath: string): boolean {
  return filePath.startsWith('/uploads/') && (filePath.endsWith('.jpg') || filePath.endsWith('.png') || filePath.endsWith('.mp4') || filePath.endsWith('.webm'));
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    console.log('Attempting to fetch album files from /api/albums/file...');
    const { searchParams } = new URL(req.url);
    const albumId = searchParams.get('albumId');

    let query = 'SELECT id, file_path, uploaded_at FROM album_files';
    let params: any[] = [];

    if (albumId) {
      if (!isValidUUID(albumId)) {
        return NextResponse.json({ error: 'Invalid albumId format: UUID expected' }, { status: 400 });
      }
      query += ' WHERE album_id = ?';
      params = [albumId];
    }

    query += ' ORDER BY uploaded_at DESC';
    const files = db.prepare(query).all(...params) as AlbumFile[];

    // Vérifier que les chemins sont valides
    const validFiles = files.filter(file => isValidFilePath(file.file_path));
    console.log('Album files fetched:', validFiles.length);
    return NextResponse.json({ files: validFiles });
  } catch (error) {
    console.error('Error in GET /api/albums/file:', error);
    return NextResponse.json({ error: 'Failed to fetch album files', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { albumId, fileId } = await req.json();
    if (!albumId || !fileId) {
      return NextResponse.json({ error: 'Missing albumId or fileId' }, { status: 400 });
    }

    // Valider les IDs comme des UUID
    if (!isValidUUID(albumId) || !isValidUUID(fileId)) {
      return NextResponse.json({ error: 'Invalid albumId or fileId format: UUID expected' }, { status: 400 });
    }

    console.log(`Attempting to delete file ${fileId} from album ${albumId}...`);
    const file = db.prepare('SELECT id, file_path FROM album_files WHERE id = ? AND album_id = ?').get(fileId, albumId) as AlbumFile | undefined;

    if (!file) {
      return NextResponse.json({ error: 'File not found in the specified album' }, { status: 404 });
    }

    // Vérifier que le chemin du fichier est valide
    if (!isValidFilePath(file.file_path)) {
      return NextResponse.json({ error: 'Invalid file path format' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', file.file_path);
    try {
      await fs.unlink(filePath);
      console.log(`File deleted from disk successfully: ${filePath}`);
    } catch (err) {
      console.error(`Failed to delete file from disk ${filePath}:`, err);
      return NextResponse.json({ error: `Failed to delete file from disk: ${isError(err) ? err.message : String(err)}`, details: String(err) }, { status: 500 });
    }

    const result = db.prepare('DELETE FROM album_files WHERE id = ? AND album_id = ?').run(fileId, albumId);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'File not found or already deleted in database' }, { status: 404 });
    }

    console.log(`File ${fileId} deleted successfully from album ${albumId} in database`);
    return NextResponse.json({ message: 'File deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/albums/file:', error);
    let errorMessage = 'Failed to delete file';
    let details = 'Unknown error';
    if (isError(error)) {
      errorMessage = error.message;
      details = error.stack || error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
      details = error;
    } else if (error && typeof error === 'object') {
      errorMessage = (error as any).message || 'Unknown error';
      details = JSON.stringify(error);
    }
    return NextResponse.json({ error: errorMessage, details }, { status: 500 });
  }
}