import express from 'express';
import books from '../routes/books.routes';

const router = express.Router();

router.use('/books', books);

export default router;