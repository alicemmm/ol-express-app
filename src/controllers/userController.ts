import { Request, Response } from 'express';
import { User } from '../models/User';
import { initDB } from '../db';

export async function getUsers(req: Request, res: Response<ApiResponse<User[]>>) {
  try {
    const db = await initDB();
    const users = await db.all<User[]>("SELECT * FROM users");
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({
        error: 'Database query failed',
        success: false
    });
  }
}

export async function getUserById(req: Request, res: Response<ApiResponse<User>>) {
  const id = parseInt(req.params.id);
  const db = await initDB();
  const user = await db.get<User>("SELECT * FROM users WHERE id = ?", id);
  user ? res.json({success: true, data: user}) : res.status(404).send({ success: false, error: 'User not found' });
}

export async function about(req: Request, res: Response<ApiResponse<string>>) {
  res.json({success: true, data: "关于我们"})
}

