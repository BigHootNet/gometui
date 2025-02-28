// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import db from '@/lib/db';

const saltRounds = 10;

const insertUser = db.prepare('INSERT INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');
const selectAllUsers = db.prepare('SELECT * FROM users LIMIT ? OFFSET ?');
const selectUserById = db.prepare('SELECT * FROM users WHERE id = ?');
const updateUser = db.prepare('UPDATE users SET name = ?, email = ?, password = ?, role = ?, banned = ? WHERE id = ?');
const deleteUser = db.prepare('DELETE FROM users WHERE id = ?');
const countUsersByRole = db.prepare('SELECT role, COUNT(*) as count FROM users WHERE banned = 0 GROUP BY role');
const countTotalUsers = db.prepare('SELECT COUNT(*) as total FROM users WHERE banned = 0');

// Interface pour les données utilisateur provenant de la base
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'superadmin' | 'admin' | 'user';
  banned: number;
}

// Interface pour req.body
interface UserBody {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: 'superadmin' | 'admin' | 'user';
  banned?: number;
}

async function handler(req: NextApiRequest & { body: UserBody }, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      try {
        const { id, type, limit = '10', offset = '0' } = req.query as { id?: string; type?: string; limit?: string; offset?: string };
        if (type === 'stats') {
          const total = (countTotalUsers.get() as { total: number }).total;
          const byRole = countUsersByRole.all() as { role: string; count: number }[];
          const stats = {
            total,
            roles: byRole.reduce((acc, { role, count }) => ({ ...acc, [role]: count }), {}),
          };
          return res.status(200).json(stats);
        }
        if (id) {
          const user = selectUserById.get(id) as User | undefined;
          if (!user) return res.status(404).json({ error: 'User not found' });
          return res.status(200).json({ users: [user], total: 1 });
        }
        const users = selectAllUsers.all(parseInt(limit), parseInt(offset)) as User[];
        const total = (countTotalUsers.get() as { total: number }).total;
        return res.status(200).json({ users, total });
      } catch (error) {
        console.error('Error in GET /api/users:', error);
        return res.status(500).json({ error: 'Failed to fetch data', details: String(error) });
      }

    case 'POST':
      try {
        const { name, email, password, role } = req.body;
        if (!password) throw new Error('Password is required');
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const id = require('uuid').v4();
        insertUser.run(id, name, email, hashedPassword, role, 0);
        console.log('User added:', { id, name, email, role });
        return res.status(201).json({ id, name, email, password: hashedPassword, role, banned: 0 });
      } catch (error) {
        console.error('Error in POST /api/users:', error);
        return res.status(500).json({ error: 'Failed to add user', details: String(error) });
      }

    case 'PUT':
      try {
        const { id, name, email, password, role, banned } = req.body;
        console.log('PUT /api/users received:', req.body);

        const user = selectUserById.get(id) as User | undefined;
        if (!user) {
          console.error('User not found:', id);
          return res.status(404).json({ error: 'User not found' });
        }

        const updatedName = name !== undefined ? name : user.name;
        const updatedEmail = email !== undefined ? email : user.email;
        const updatedPassword = password && password.trim() !== '' ? await bcrypt.hash(password, saltRounds) : user.password;
        const updatedRole = role !== undefined ? role : user.role;
        const updatedBanned = banned !== undefined ? banned : user.banned;

        updateUser.run(updatedName, updatedEmail, updatedPassword, updatedRole, updatedBanned, id);
        console.log('User updated:', { id, name: updatedName, email: updatedEmail, role: updatedRole, banned: updatedBanned });
        return res.status(200).json({ id, name: updatedName, email: updatedEmail, password: updatedPassword, role: updatedRole, banned: updatedBanned });
      } catch (error) {
        console.error('Error in PUT /api/users:', error);
        return res.status(500).json({ error: 'Failed to update user', details: String(error) });
      }

    case 'DELETE':
      try {
        const { id } = req.body;
        deleteUser.run(id);
        console.log('User deleted:', id);
        return res.status(200).json({ message: 'User deleted' });
      } catch (error) {
        console.error('Error in DELETE /api/users:', error);
        return res.status(500).json({ error: 'Failed to delete user', details: String(error) });
      }

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default handler;