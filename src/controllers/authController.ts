import { Request, Response } from 'express';
import { pool } from '../config/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateAccessToken, generateRefreshToken } from '../utils/token.util';
import { redis } from '../config/redis';
import { REFRESH_TOKEN_EXPIRE } from '../config/jwt';
import dotenv from 'dotenv';


dotenv.config();

export const register = async (req: Request, res: Response) => {
    try {

        const { username, password } = req.body;

        if (!username || !password) {
          return res.status(400).json({ message: 'Username and password required' });
        }

        const [userExists]: any = await pool.query(
          'SELECT id FROM users WHERE username = ?',
          [username]
        );

        if (userExists.length > 0) {
          return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
          'INSERT INTO users (username, password_hash) VALUES (?, ?)',
          [username, hashedPassword]
        );

        res.json({
          status: 'success',
          message: 'User registered',
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const login = async (req: Request, res: Response) => {
    try {

        const { username, password } = req.body;
        const [rows]: any = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        const user = rows[0];
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) return res.status(400).json({ message: 'Invalid credentials' });

        const payload = { id: user.id, username: user.username };
        const accessToken = generateAccessToken(payload);
        const refreshToken = generateRefreshToken(payload);

        await redis.set(
          `refresh_token:${user.id}`,
          '1',
          'EX',
          REFRESH_TOKEN_EXPIRE
        )

        res.json({
          message: 'Login successful',
          accessToken,
          refreshToken
         });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: 'Refresh token required' });
  }

  try {
    const decoded: any = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string);
    const storedToken = await redis.get(`refresh_token:${decoded.id}`);

    if (storedToken !== refreshToken) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }
    const payload = { id: decoded.id, username: decoded.username };
    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);
    await redis.set(
      `refresh_token:${decoded.id}`,
      newRefreshToken,
      'EX',
      REFRESH_TOKEN_EXPIRE
    )
    res.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    });
  } catch (error) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
};

export const logout = async (req: any, res: Response) => {
  try {
    const userId = req.user.id;
    const result = await redis.del(`refresh_token:${userId}`);

    if (result === 0) {
      return res.status(400).json({ message: 'User is not logged in' });
    }

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};