/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *
 *   responses:
 *     Success:
 *       description: Berhasil
 *     BadRequest:
 *       description: Data tidak valid
 *     Unauthorized:
 *       description: Token tidak valid
 *     NotFound:
 *       description: Data tidak ditemukan
 *
 *   schemas:
 *     Book:
 *       type: object
 *       required: [judul, penulis, penerbit, tahun_terbit, kategori, stok]
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         judul:
 *           type: string
 *           example: Clean Code
 *         penulis:
 *           type: string
 *           example: Robert C. Martin
 *         penerbit:
 *           type: string
 *           example: Prentice Hall
 *         tahun_terbit:
 *           type: integer
 *           example: 2008
 *         kategori:
 *           type: string
 *           example: Programming
 *         stok:
 *           type: integer
 *           example: 10
 *
 *     AuthRegister:
 *       type: object
 *       required: [username, password]
 *       properties:
 *         username:
 *           type: string
 *           example: user123
 *         password:
 *           type: string
 *           example: passworduser123
 *
 *     AuthLogin:
 *       type: object
 *       required: [username, password]
 *       properties:
 *         username:
 *           type: string
 *           example: user123
 *         password:
 *           type: string
 *           example: passworduser123
 *
 *     RefreshToken:
 *       type: object
 *       required: [refreshToken]
 *       properties:
 *         refreshToken:
 *           type: string
 *           example: your_refresh_token
 */
