// src/lib/db.ts
import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

const db = new Database('database/users.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    banned INTEGER DEFAULT 0
  )
`);

const saltRounds = 10;
const insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');

// Hacher le mot de passe initial
const hashedPassword = bcrypt.hashSync('password123', saltRounds);
insertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);

export default db;