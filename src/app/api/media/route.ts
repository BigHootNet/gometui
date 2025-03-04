// src/app/api/media/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { promises as fs } from 'fs';
import path from 'path';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';
import { Media } from '@/app/admin/types/index'; // Import correct, sans déclaration locale

// Type guard pour vérifier si un objet est une instance de Error
function isError(error: unknown): error is Error {
  return error instanceof Error;
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    console.log('Unauthorized access to /api/media - No session or user');
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    console.log('Attempting to fetch media from /api/media...');
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const media = db
      .prepare('SELECT id, file_path, type, uploaded_at, user_id, associated_with, description, tags FROM media ORDER BY uploaded_at DESC LIMIT ? OFFSET ?')
      .all(limit, offset) as Media[];
    const total = db.prepare('SELECT COUNT(*) as total FROM media').get() as { total: number };

    console.log('Media fetched:', media.length, 'total:', total.total);
    return NextResponse.json({ media, total: total.total });
  } catch (error) {
    console.error('Error in GET /api/media:', error);
    return NextResponse.json({ error: 'Failed to fetch media', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    console.log('Unauthorized access to PUT /api/media - No session or user');
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, folder, tags, description } = body;

    if (!id) {
      console.log('Validation failed: Missing media id');
      return NextResponse.json({ error: 'Missing media id' }, { status: 400 });
    }

    console.log(`Attempting to update media ${id} with:`, { folder, tags, description });
    const updateQuery = db.prepare(
      'UPDATE media SET associated_with = ?, tags = ?, description = ? WHERE id = ? AND user_id = ?'
    );
    const result = updateQuery.run(folder || null, JSON.stringify(tags || []), description || '', id, session.user.id);

    if (result.changes === 0) {
      console.log('Update failed: Media not found or unauthorized for user:', session.user.id);
      return NextResponse.json({ error: 'Media not found or unauthorized' }, { status: 404 });
    }

    console.log(`Media ${id} updated successfully`);
    return NextResponse.json({ message: 'Media updated successfully' });
  } catch (error) {
    console.error('Error in PUT /api/media:', error);
    let errorMessage = 'Failed to update media';
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

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    console.log('Unauthorized access to DELETE /api/media - No session or user');
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { id } = await req.json();
    if (!id) {
      console.log('Validation failed: Missing media id');
      return NextResponse.json({ error: 'Missing media id' }, { status: 400 });
    }

    console.log(`Attempting to delete media ${id}...`);
    const media = db.prepare('SELECT file_path FROM media WHERE id = ? AND user_id = ?').get(id, session.user.id) as Media | undefined;

    if (!media) {
      console.log('Media not found or unauthorized for user:', session.user.id);
      return NextResponse.json({ error: 'Media not found or unauthorized' }, { status: 404 });
    }

    const filePath = path.join(process.cwd(), 'public', media.file_path);
    try {
      await fs.unlink(filePath);
      console.log(`Media file deleted from disk: ${filePath}`);
    } catch (err) {
      console.error(`Failed to delete media file from disk ${filePath}:`, err);
      return NextResponse.json({ error: `Failed to delete media file from disk: ${err instanceof Error ? err.message : String(err)}`, details: String(err) }, { status: 500 });
    }

    const result = db.prepare('DELETE FROM media WHERE id = ? AND user_id = ?').run(id, session.user.id);
    if (result.changes === 0) {
      console.log('Delete failed: Media not found or already deleted for user:', session.user.id);
      return NextResponse.json({ error: 'Media not found or already deleted' }, { status: 404 });
    }

    console.log(`Media ${id} deleted successfully`);
    return NextResponse.json({ message: 'Media deleted successfully' });
  } catch (error) {
    console.error('Error in DELETE /api/media:', error);
    let errorMessage = 'Failed to delete media';
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