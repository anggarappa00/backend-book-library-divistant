# Koleksi Buku

API untuk mengelola koleksi buku dengan autentikasi pengguna. Proyek ini dibangun menggunakan TypeScript, Express.js, MySQL, Redis, dan JWT untuk autentikasi.

## Fitur

- **Autentikasi Pengguna**: Registrasi dan login dengan JWT
- **Manajemen Buku**: CRUD operasi untuk buku (tambah, lihat, update, hapus)
- **Dokumentasi API**: Swagger UI untuk dokumentasi API
- **Caching**: Redis untuk caching data
- **Database**: MySQL untuk penyimpanan data
- **Docker**: Setup Docker untuk development dan production

## Teknologi yang Digunakan

- **Backend**: Node.js, Express.js, TypeScript
- **Database**: MySQL
- **Caching**: Redis
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger/OpenAPI
- **Containerization**: Docker, Docker Compose

## Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda memiliki:

- Node.js (versi 16 atau lebih baru)
- Docker dan Docker Compose
- Git

## Instalasi

1. **Clone repository ini:**
   ```bash
   git clone <repository-url>
   cd koleksi-buku
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Buat file `.env` di root directory dan isi dengan:
   ```
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=koleksi_buku
   JWT_SECRET=your_jwt_secret
   REDIS_HOST=localhost
   REDIS_PORT=6379
   FRONTEND_URL=http://localhost:3000
   ```

4. **Jalankan dengan Docker (Direkomendasikan):**
   ```bash
   docker-compose up -d
   ```

   Atau untuk development:
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.override.yml up -d
   ```

5. **Jalankan migrasi database:**
   Jalankan script SQL di `db/migrations/add-buku-table.sql` untuk membuat tabel buku.

## Penggunaan

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

Server akan berjalan di `http://localhost:5000`

## Dokumentasi API

Dokumentasi API tersedia di `http://localhost:5000/docs` menggunakan Swagger UI.

### Endpoint Utama

#### Autentikasi
- `POST /auth/register` - Registrasi pengguna baru
- `POST /auth/login` - Login pengguna

#### Buku
- `GET /books` - Mendapatkan semua buku
- `GET /books/:id` - Mendapatkan buku berdasarkan ID
- `POST /books` - Menambah buku baru (memerlukan autentikasi)
- `PUT /books/:id` - Update buku (memerlukan autentikasi)
- `DELETE /books/:id` - Hapus buku (memerlukan autentikasi)

## Struktur Proyek

```
koleksi-buku/
├── db/
│   └── migrations/
│       └── add-buku-table.sql
├── src/
│   ├── config/
│   │   ├── db.ts
│   │   ├── jwt.ts
│   │   └── redis.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   └── bookController.ts
│   ├── docs/
│   │   ├── auth.swagger.ts
│   │   ├── books.swagger.ts
│   │   └── components.swagger.ts
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   ├── routes/
│   │   ├── authRoute.ts
│   │   └── bookRoute.ts
│   ├── utils/
│   │   └── token.util.ts
│   ├── index.ts
│   └── swagger.ts
├── Dockerfile.dev
├── Dockerfile.prod
├── docker-compose.yml
├── docker-compose.prod.yml
├── docker-compose.override.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Kontribusi

1. Fork proyek ini
2. Buat branch fitur baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## Lisensi

Proyek ini menggunakan lisensi ISC.
