// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'superadmin' | 'admin' | 'user';
  banned?: number;
}

interface RoleCount {
  role: string;
  count: number;
}

interface TotalCount {
  total: number;
}

const saltRounds = 10;

const insertUser = db.prepare('INSERT INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');
const selectAllUsers = db.prepare('SELECT * FROM users');
const updateUser = db.prepare('UPDATE users SET name = ?, email = ?, password = ?, role = ?, banned = ? WHERE id = ?');
const deleteUser = db.prepare('DELETE FROM users WHERE id = ?');
const countUsersByRole = db.prepare('SELECT role, COUNT(*) as count FROM users WHERE banned = 0 GROUP BY role');
const countTotalUsers = db.prepare('SELECT COUNT(*) as total FROM users WHERE banned = 0');

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');

  try {
    if (type === 'stats') {
      const totalResult = countTotalUsers.get() as TotalCount;
      const total = totalResult.total;
      const byRole = countUsersByRole.all() as RoleCount[];
      const stats = {
        total,
        roles: byRole.reduce((acc, { role, count }) => ({ ...acc, [role]: count }), {} as Record<string, number>),
      };
      return NextResponse.json(stats);
    }
    const users = selectAllUsers.all() as User[];
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const id = uuidv4();
    insertUser.run(id, name, email, hashedPassword, role, 0);
    return NextResponse.json({ id, name, email, password: hashedPassword, role, banned: 0 }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add user', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, email, password, role, banned } = await req.json();
    const users = selectAllUsers.all() as User[]; // Typage explicite
    const userToUpdate = users.find((u) => u.id === id);
    if (!userToUpdate) throw new Error('User not found');
    const hashedPassword = password ? await bcrypt.hash(password, saltRounds) : userToUpdate.password;
    updateUser.run(name, email, hashedPassword, role, banned !== undefined ? banned : 0, id);
    return NextResponse.json({ id, name, email, password: hashedPassword, role, banned });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    deleteUser.run(id);
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user', details: String(error) }, { status: 500 });
  }
}