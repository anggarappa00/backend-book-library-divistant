import { Request, Response } from 'express';
import { pool } from '../config/db';
import { redis } from '../config/redis';

class BookController {
    async getBooks(req: Request, res: Response) {
        try {
            const cacheKey = 'books:all';
            const cachedBooks = await redis.get(cacheKey);
            if (cachedBooks) {
                res.status(200).json({ status: 'success', data: JSON.parse(cachedBooks), source: 'cache' });
                return;
            }
            const [rows] = await pool.query('SELECT * FROM buku');

            await redis.set(cacheKey, JSON.stringify(rows), 'EX', 60);

            res.status(200).json({ status: 'success', data: rows, source: 'database' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Failed to fetch books' });
        }
    }

    async addBook(req: Request, res: Response) {
        const { judul, penulis, penerbit, tahun_terbit, kategori, stok } = req.body;
        if (!judul || !penulis || !penerbit || !tahun_terbit || !kategori || !stok) {
            return res.status(400).json({ status: 'error', message: 'All fields are required' });
        }
        try {
            await pool.query(
                'INSERT INTO buku (judul, penulis, penerbit, tahun_terbit, kategori, stok) VALUES (?, ?, ?, ?, ?, ?)',
                [judul, penulis, penerbit, tahun_terbit, kategori, stok]
            );

            await redis.del('books:all');
            res.status(200).json({ status: 'success', message: 'Book added successfully' });
        }
        catch (error) {
            res.status(500).json({ status: 'error', message: 'Failed to add book' });
        }
    }

    async getBookById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cacheKey = `book:${id}`;
            const cachedBook = await redis.get(cacheKey);
            if (cachedBook) {
                res.status(200).json({ status: 'success', data: JSON.parse(cachedBook), source: 'cache' });
                return;
            }
            const [rows]: any = await pool.query('SELECT * FROM buku WHERE id = ?', [id]);
            if (rows.length === 0) {
                return res.status(404).json({ status: 'error', message: 'Book not found' });
            }

            await redis.set(cacheKey, JSON.stringify(rows[0]), 'EX', 60);
            res.status(200).json({ status: 'success', data: rows[0], source: 'database' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Failed to fetch book' });
        }
    }

    async updateBook(req: Request, res: Response) {
        const { id } = req.params;
        const { judul, penulis, penerbit, tahun_terbit, kategori, stok } = req.body;
        try {
            const [result]: any = await pool.query(
                'UPDATE buku SET judul = ?, penulis = ?, penerbit = ?, tahun_terbit = ?, kategori = ?, stok = ? WHERE id = ?',
                [judul, penulis, penerbit, tahun_terbit, kategori, stok, id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).json({ status: 'error', message: 'Book not found' });
            }

            await redis.del('books:all');
            await redis.del(`book:${id}`);
            res.status(200).json({ status: 'success', message: 'Book updated successfully' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Failed to update book' });
        }
    }

    async deleteBook(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const [result]: any = await pool.query('DELETE FROM buku WHERE id = ?', [id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ status: 'error', message: 'Book not found' });
            }
            await redis.del('books:all');
            await redis.del(`book:${id}`);
            res.status(200).json({ status: 'success', message: 'Book deleted successfully' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: 'Failed to delete book' });
        }
    }
}

export default new BookController();