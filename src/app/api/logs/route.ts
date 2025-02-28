// src/app/api/logs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db, { insertLog, selectAllLogs } from '@/lib/db';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '10', 10); // Par défaut 10
  const offset = parseInt(searchParams.get('offset') || '0', 10); // Par défaut 0

  try {
    const logs = db.prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC LIMIT ? OFFSET ?').all(limit, offset);
    const total = db.prepare('SELECT COUNT(*) as total FROM logs').get() as { total: number };
    return NextResponse.json({ logs, total: total.total });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch logs', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_id, action, target_id, target_name, timestamp } = await req.json();
    insertLog.run(user_id, action, target_id || null, target_name || null, timestamp);
    return NextResponse.json({ message: 'Log added' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add log', details: String(error) }, { status: 500 });
  }
}