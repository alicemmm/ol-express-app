import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function initDB() {
    const db = open({
    filename: './database.db', // 数据库文件路径
    driver: sqlite3.Database
  });
  return db;
}

export async function setupDatabase() {
  const db = await initDB(); // 初始化数据库

    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE
    );

    INSERT OR IGNORE INTO users (name, email) VALUES 
      ('Alice', 'alice@example.com'),
      ('Bob', 'bob@example.com');
  `);

  return db;
}