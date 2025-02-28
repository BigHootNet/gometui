// src/app/api/logs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

  try {
    const logs = db
      .prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC LIMIT ? OFFSET ?')
      .all(limit, offset);
    const total = db.prepare('SELECT COUNT(*) as total FROM logs').get() as { total: number };
    return NextResponse.json({ logs, total: total.total });
  } catch (error) {
    console.error('Error in GET /api/logs:', error);
    return NextResponse.json({ error: 'Failed to fetch logs', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_id, action, target_id, target_name, timestamp, details } = await req.json();
    db.prepare(
      'INSERT INTO logs (user_id, action, target_id, target_name, timestamp, details) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(user_id, action, target_id || null, target_name || null, timestamp, details || null);
    return NextResponse.json({ message: 'Log added' }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/logs:', error);
    return NextResponse.json({ error: 'Failed to add log', details: String(error) }, { status: 500 });
  }
}