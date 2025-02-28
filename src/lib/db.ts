// src/lib/db.ts
import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

const db = new Database('database/users.db');

// Table users
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

// Table logs
db.exec(`
  CREATE TABLE IF NOT EXISTS logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    action TEXT NOT NULL,
    target_id TEXT,
    target_name TEXT,
    timestamp INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// Insérer l'utilisateur initial
const saltRounds = 10;
const insertInitialUser = db.prepare('INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)');
const hashedPassword = bcrypt.hashSync('password123', saltRounds);
insertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);

// Préparer la requête pour insérer un log
export const insertLog = db.prepare('INSERT INTO logs (user_id, action, target_id, target_name, timestamp) VALUES (?, ?, ?, ?, ?)');
export const selectAllLogs = db.prepare('SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC');

export default db;