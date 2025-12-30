import { Router } from 'express';
import BookController from '../controllers/bookController';
import { authenticateToken } from '../middlewares/authMiddleware';

const router = Router();

router.use(authenticateToken);

router
    .route('/')
    .get(BookController.getBooks)
    .post(BookController.addBook);

router
    .route('/:id')
    .get(BookController.getBookById)
    .put(BookController.updateBook)
    .delete(BookController.deleteBook);

export default router;