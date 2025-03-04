// src/app/api/carousels/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';

interface Carousel {
  id: string;
  title: string;
  description?: string;
  items: string[]; // Liste d’IDs de médias
  created_at: number;
  updated_at: number;
  user_id: string;
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

    const carousels = db
      .prepare('SELECT * FROM carousels ORDER BY updated_at DESC LIMIT ? OFFSET ?')
      .all(limit, offset) as Carousel[];
    const total = db.prepare('SELECT COUNT(*) as total FROM carousels').get() as { total: number };

    return NextResponse.json({ carousels, total: total.total });
  } catch (error) {
    console.error('Error in GET /api/carousels:', error);
    return NextResponse.json({ error: 'Failed to fetch carousels', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { title, description, items } = await req.json();
    if (!title || !items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Missing or invalid title or items' }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const timestamp = Math.floor(Date.now() / 1000);
    db.prepare(
      'INSERT INTO carousels (id, title, description, items, created_at, updated_at, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(id, title, description || null, JSON.stringify(items), timestamp, timestamp, session.user.id);

    return NextResponse.json({ message: 'Carousel created', id });
  } catch (error) {
    console.error('Error in POST /api/carousels:', error);
    return NextResponse.json({ error: 'Failed to create carousel', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || (session.user.role !== 'admin' && session.user.role !== 'superadmin')) {
    return NextResponse.json({ error: 'Unauthorized or insufficient permissions' }, { status: 401 });
  }

  try {
    const { id, title, description, items } = await req.json();
    if (!id || !title || !items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Missing or invalid id, title, or items' }, { status: 400 });
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const result = db.prepare(
      'UPDATE carousels SET title = ?, description = ?, items = ?, updated_at = ? WHERE id = ?'
    ).run(title, description || null, JSON.stringify(items), timestamp, id);

    if (result.changes === 0) {
      return NextResponse.json({ error: 'Carousel not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Carousel updated' });
  } catch (error) {
    console.error('Error in PUT /api/carousels:', error);
    return NextResponse.json({ error: 'Failed to update carousel', details: String(error) }, { status: 500 });
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
      return NextResponse.json({ error: 'Missing carousel id' }, { status: 400 });
    }

    const result = db.prepare('DELETE FROM carousels WHERE id = ?').run(id);
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Carousel not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Carousel deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/carousels:', error);
    return NextResponse.json({ error: 'Failed to delete carousel', details: String(error) }, { status: 500 });
  }
}