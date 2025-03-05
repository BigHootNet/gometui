// src/app/api/albums/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';
import { Album } from '@/app/admin/types/index';

function parseMediaIds(mediaIds: string | string[] | null | undefined): string[] {
  if (typeof mediaIds === 'string') {
    try {
      return JSON.parse(mediaIds) as string[];
    } catch (e) {
      return []; // Fallback à un tableau vide si parsing échoue
    }
  }
  if (Array.isArray(mediaIds)) {
    return mediaIds; // Retourner directement le tableau si c’est déjà un string[]
  }
  return []; // Fallback par défaut pour null/undefined
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const albums = db
      .prepare('SELECT * FROM albums ORDER BY created_at DESC LIMIT ? OFFSET ?')
      .all(limit, offset) as Album[];
    const total = db.prepare('SELECT COUNT(*) as total FROM albums').get() as { total: number };

    // Parser media_ids depuis la table albums
    const albumsWithMedia = albums.map(album => ({
      ...album,
      media_ids: parseMediaIds(album.media_ids) as string[],
    }));

    return NextResponse.json({ albums: albumsWithMedia, total: total.total });
  } catch (error) {
    console.error('Error in GET /api/albums:', error);
    return NextResponse.json({ error: 'Failed to fetch albums', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { title, media_ids } = body;
    if (!title) {
      return NextResponse.json({ error: 'Missing title' }, { status: 400 });
    }

    const normalizedMediaIds = parseMediaIds(media_ids);
    const mediaIdsJson = JSON.stringify(normalizedMediaIds) as string;
    const id = crypto.randomUUID();
    const timestamp = Math.floor(Date.now() / 1000);
    db.prepare(
      'INSERT INTO albums (id, user_id, title, created_at, media_ids) VALUES (?, ?, ?, ?, ?)'
    ).run(id, session.user.id, title, timestamp, mediaIdsJson);

    return NextResponse.json({ message: 'Album created', id });
  } catch (error) {
    console.error('Error in POST /api/albums:', error);
    return NextResponse.json({ error: 'Failed to create album', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { id, title, media_ids } = body;
    if (!id || !title) {
      return NextResponse.json({ error: 'Missing id or title' }, { status: 400 });
    }

    const normalizedMediaIds = parseMediaIds(media_ids);
    const mediaIdsJson = JSON.stringify(normalizedMediaIds) as string;
    const timestamp = Math.floor(Date.now() / 1000);
    const result = db.prepare(
      'UPDATE albums SET title = ?, created_at = ?, media_ids = ? WHERE id = ?'
    ).run(title, timestamp, mediaIdsJson, id);

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
    console.log("ID reçu pour suppression d'album :", id, "Longueur :", id.length);
    if (!id) {
      return NextResponse.json({ error: 'Missing album id' }, { status: 400 });
    }

    // Vérifier les enregistrements liés dans album_files
    const albumFiles = db.prepare('SELECT * FROM album_files WHERE album_id = ?').all(id);
    console.log("Album_files liés à l'album :", id, albumFiles);

    // Option 1 : Si vous souhaitez que la suppression en cascade fonctionne,
    // assurez-vous que le schéma a bien été migré (ON DELETE CASCADE sur album_files).
    // Option 2 : Sinon, supprimer manuellement les enregistrements liés.
    if (albumFiles.length > 0) {
      console.log("Suppression manuelle des enregistrements dans album_files pour l'album :", id);
      db.prepare('DELETE FROM album_files WHERE album_id = ?').run(id);
    }

    // Supprimer l'album
    const result = db.prepare('DELETE FROM albums WHERE id = ?').run(String(id));
    console.log("Résultat de la suppression :", result);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Album not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Album deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/albums:', error);
    return NextResponse.json({ error: 'Failed to delete album', details: String(error) }, { status: 500 });
  }
}
