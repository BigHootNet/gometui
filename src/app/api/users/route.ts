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
const selectAllUsers = db.prepare('SELECT * FROM users LIMIT ? OFFSET ?');
const selectUserById = db.prepare('SELECT * FROM users WHERE id = ?');
const updateUser = db.prepare('UPDATE users SET name = ?, email = ?, password = ?, role = ?, banned = ? WHERE id = ?');
const deleteUser = db.prepare('DELETE FROM users WHERE id = ?');
const countUsersByRole = db.prepare('SELECT role, COUNT(*) as count FROM users WHERE banned = 0 GROUP BY role');
const countTotalUsers = db.prepare('SELECT COUNT(*) as total FROM users WHERE banned = 0');

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const id = searchParams.get('id');
  const limit = parseInt(searchParams.get('limit') || '10', 10);
  const offset = parseInt(searchParams.get('offset') || '0', 10);

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

    if (id) {
      const user = selectUserById.get(id) as User | undefined;
      if (!user) {
        console.error('GET /api/users: User not found:', id);
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      return NextResponse.json({ users: [user], total: 1 });
    }

    const users = selectAllUsers.all(limit, offset) as User[];
    const total = (countTotalUsers.get() as TotalCount).total;
    return NextResponse.json({ users, total });
  } catch (error) {
    console.error('Error in GET /api/users:', error);
    return NextResponse.json({ error: 'Failed to fetch data', details: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();
    if (!password) throw new Error('Password is required');
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const id = uuidv4();
    insertUser.run(id, name, email, hashedPassword, role, 0);
    console.log('User added:', { id, name, email, role, hashedPassword });
    return NextResponse.json({ id, name, email, password: hashedPassword, role, banned: 0 }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/users:', error);
    return NextResponse.json({ error: 'Failed to add user', details: String(error) }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, email, password, role, banned } = body as {
      id: string;
      name?: string;
      email?: string;
      password?: string;
      role?: 'superadmin' | 'admin' | 'user';
      banned?: number;
    };
    console.log('PUT /api/users received:', body);

    const user = selectUserById.get(id) as User | undefined;
    if (!user) {
      console.error('PUT /api/users: User not found:', id);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedName = name !== undefined ? name : user.name;
    const updatedEmail = email !== undefined ? email : user.email;
    const updatedPassword = password && password.trim() !== '' ? await bcrypt.hash(password, saltRounds) : user.password;
    const updatedRole = role !== undefined ? role : user.role;
    const updatedBanned = banned !== undefined ? banned : user.banned;

    console.log('Executing update with:', { updatedName, updatedEmail, updatedPassword, updatedRole, updatedBanned, id });
    const result = updateUser.run(updatedName, updatedEmail, updatedPassword, updatedRole, updatedBanned, id);
    console.log('Update result:', result);

    if (result.changes === 0) {
      console.error('PUT /api/users: No rows updated for id:', id);
      return NextResponse.json({ error: 'No changes applied' }, { status: 400 });
    }

    const updatedUser = selectUserById.get(id) as User;
    console.log('User updated:', updatedUser);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error('Error in PUT /api/users:', error);
    return NextResponse.json({ error: 'Failed to update user', details: String(error) }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    deleteUser.run(id);
    console.log('User deleted:', id);
    return NextResponse.json({ message: 'User deleted' });
  } catch (error) {
    console.error('Error in DELETE /api/users:', error);
    return NextResponse.json({ error: 'Failed to delete user', details: String(error) }, { status: 500 });
  }
}