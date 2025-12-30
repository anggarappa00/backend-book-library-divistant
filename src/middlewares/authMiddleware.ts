import { Request, Response, NextFunction } from 'express';
import { redis } from '../config/redis';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Authorization header missing' });

  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token required' });

  try {
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

    const isLogin = await redis.get(`refresh_token:${decoded.id}`);
    if (!isLogin) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }

};
