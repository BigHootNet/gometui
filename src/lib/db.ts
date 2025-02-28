// src/lib/db.ts
import Database from 'better-sqlite3';
import bcrypt from 'bcryptjs';

const db = new Database('database/users.db', { verbose: console.log }); // Activer les logs pour déboguer

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
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// Table albums
db.exec(`
  CREATE TABLE IF NOT EXISTS albums (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )
`);

// Table album_files
db.exec(`
  CREATE TABLE IF NOT EXISTS album_files (
    id TEXT PRIMARY KEY,
    album_id TEXT NOT NULL,
    file_path TEXT NOT NULL,
    uploaded_at INTEGER NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(id)
  )
`);

// Table carousels
try {
  db.exec(`
    CREATE TABLE IF NOT EXISTS carousels (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      items TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      updated_at INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
} catch (error) {
  console.error('Error creating carousels table:', error);
  throw error; // Provoque un arrêt avec le message d’erreur exact
}

// Migration pour ajouter la colonne avatar si elle n’existe pas
try {
  db.exec(`ALTER TABLE users ADD COLUMN avatar TEXT DEFAULT NULL`);
} catch (error: unknown) {
  if (error instanceof Error && error.message.includes('duplicate column name')) {
    // Ignorer si la colonne existe déjà
  } else {
    console.error('Error adding avatar column to users:', error);
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