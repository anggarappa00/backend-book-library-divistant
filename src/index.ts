import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import authRoute from './routes/authRoute';
import bookRoute from './routes/bookRoute';

dotenv.config();
const app = express();

app.use(cors({
  origin: [process.env.FRONTEND_URL as string],
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type','x-api-key','Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/auth', authRoute);
app.use('/books', bookRoute);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/projects', express.static(path.join(__dirname, '..', 'uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
