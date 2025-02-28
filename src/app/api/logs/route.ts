// src/app/api/logs/route.ts
import { NextRequest, NextResponse } from 'next/server';
import db, { insertLog, selectAllLogs } from '@/lib/db';

export async function GET() {
  try {
    const logs = selectAllLogs.all();
    return NextResponse.json(logs);
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