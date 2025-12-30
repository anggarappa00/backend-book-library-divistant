import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRE } from '../config/jwt';

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: ACCESS_TOKEN_EXPIRE
  });
};

export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string);
};
