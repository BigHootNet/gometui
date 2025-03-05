// src/lib/db.ts
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const db = new Database('database/users.db', { verbose: console.log });

// Active les contraintes de clés étrangères
db.pragma('foreign_keys = ON');

// Table users
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    banned INTEGER DEFAULT 0,
    avatar TEXT DEFAULT NULL
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
    details TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Table albums (mis à jour pour inclure media_ids)
db.exec(`
  CREATE TABLE IF NOT EXISTS albums (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    media_ids TEXT DEFAULT '[]',
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Table album_files (avec suppression en cascade sur album_id)
db.exec(`
  CREATE TABLE IF NOT EXISTS album_files (
    id TEXT PRIMARY KEY,
    album_id TEXT NOT NULL,
    file_path TEXT NOT NULL,
    uploaded_at INTEGER NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(id) ON DELETE CASCADE
  )
`);

// Table carousels
db.exec(`
  CREATE TABLE IF NOT EXISTS carousels (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    items TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Table media (mis à jour pour inclure description et tags)
db.exec(`
  CREATE TABLE IF NOT EXISTS media (
    id TEXT PRIMARY KEY,
    file_path TEXT NOT NULL,
    type TEXT NOT NULL,
    uploaded_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    associated_with TEXT,
    description TEXT DEFAULT NULL,
    tags TEXT DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Migrations pour ajouter les colonnes si nécessaire
try {
  db.exec(`ALTER TABLE albums ADD COLUMN media_ids TEXT DEFAULT '[]'`);
} catch (error: unknown) {
  if (error instanceof Error && error.message.includes('duplicate column name')) {
    // Ignorer
  } else {
    console.error('Error adding media_ids column to albums:', error);
  }
}

try {
  db.exec(`ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT NULL`);
} catch (error: unknown) {
  if (error instanceof Error && error.message.includes('duplicate column name')) {
    // Ignorer
  } else {
    console.error('Error adding avatar column to users:', error);
  }
}

try {
  db.exec(`ALTER TABLE media ADD COLUMN description TEXT DEFAULT NULL`);
} catch (error: unknown) {
  if (error instanceof Error && error.message.includes('duplicate column name')) {
    // Ignorer
  } else {
    console.error('Error adding description column to media:', error);
  }
}

try {
  db.exec(`ALTER TABLE media ADD COLUMN tags TEXT DEFAULT NULL`);
} catch (error: unknown) {
  if (error instanceof Error && error.message.includes('duplicate column name')) {
    // Ignorer
  } else {
    console.error('Error adding tags column to media:', error);
  }
}

// Insérer l'utilisateur initial
const saltRounds = 10;
const insertInitialUser = db.prepare(
  'INSERT OR IGNORE INTO users (id, name, email, password, role, banned) VALUES (?, ?, ?, ?, ?, ?)'
);
const hashedPassword = bcrypt.hashSync('password123', saltRounds);
insertInitialUser.run('1', 'Test User', 'test@example.com', hashedPassword, 'superadmin', 0);

export const insertLog = db.prepare(
  'INSERT INTO logs (user_id, action, target_id, target_name, timestamp, details) VALUES (?, ?, ?, ?, ?, ?)'
);
export const selectAllLogs = db.prepare(
  'SELECT logs.*, users.name AS user_name FROM logs JOIN users ON logs.user_id = users.id ORDER BY timestamp DESC'
);

export default db;
