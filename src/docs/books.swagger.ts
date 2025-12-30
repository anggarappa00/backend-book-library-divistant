/**
 * @openapi
 * /books:
 *   get:
 *     summary: Ambil semua buku
 *     tags: [Books]
 *     security: [{ bearerAuth: [] }]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *
 *   post:
 *     summary: Tambah buku
 *     tags: [Books]
 *     security: [{ bearerAuth: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         $ref: '#/components/responses/Success'
 *
 * /books/{id}:
 *   get:
 *     summary: Detail buku
 *     tags: [Books]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *
 *   put:
 *     summary: Update buku
 *     tags: [Books]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *
 *   delete:
 *     summary: Hapus buku
 *     tags: [Books]
 *     security: [{ bearerAuth: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 */
