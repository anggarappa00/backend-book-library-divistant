-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: mysql-book-library
-- Generation Time: Dec 30, 2025 at 10:57 AM
-- Server version: 8.0.44
-- PHP Version: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `koleksi-buku`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id` int NOT NULL,
  `judul` varchar(200) DEFAULT NULL,
  `penulis` varchar(100) DEFAULT NULL,
  `penerbit` varchar(100) DEFAULT NULL,
  `tahun_terbit` int DEFAULT NULL,
  `kategori` varchar(50) DEFAULT NULL,
  `stok` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id`, `judul`, `penulis`, `penerbit`, `tahun_terbit`, `kategori`, `stok`) VALUES
(22, 'Pemrograman PHP Dasar', 'Andi Wijaya', 'Informatika', 2020, 'Teknologi', 12),
(23, 'Belajar MySQL', 'Budi Santoso', 'Elex Media', 2019, 'Teknologi', 8),
(24, 'Algoritma dan Struktur Data', 'Siti Aminah', 'Gramedia', 2021, 'Pendidikan', 10),
(25, 'Dasar Dasar Web', 'Rina Kurnia', 'Andi Publisher', 2018, 'Teknologi', 5),
(26, 'Manajemen Waktu', 'Dewi Lestari', 'Gramedia', 2017, 'Pengembangan Diri', 7),
(27, 'Analisis Sistem Informasi', 'Ahmad Fauzi', 'Informatika', 2022, 'Teknologi', 9),
(28, 'Basis Data Lanjut', 'Rudi Hartono', 'Elex Media', 2020, 'Teknologi', 6),
(29, 'Pengantar Jaringan Komputer', 'Nina Saputri', 'Andi Publisher', 2019, 'Teknologi', 11),
(30, 'Logika Informatika', 'Tono Prasetyo', 'Gramedia', 2016, 'Pendidikan', 4),
(31, 'Kewirausahaan Digital', 'Maya Putri', 'Informatika', 2021, 'Bisnis', 13),
(32, 'Pemrograman Java Lanjut', 'Doni Pratama', 'Informatika', 2022, 'Teknologi', 10),
(33, 'Belajar Python Cepat', 'Lisa Anggraini', 'Elex Media', 2021, 'Teknologi', 14),
(34, 'Statistika Dasar', 'Hendra Gunawan', 'Gramedia', 2018, 'Pendidikan', 6),
(35, 'Desain UI UX', 'Putri Mahesa', 'Andi Publisher', 2020, 'Teknologi', 9),
(36, 'Digital Marketing', 'Raka Saputra', 'Gramedia', 2021, 'Bisnis', 15),
(37, 'Sistem Operasi', 'Yusuf Ramadhan', 'Informatika', 2019, 'Teknologi', 7),
(38, 'Keamanan Informasi', 'Aulia Rahman', 'Elex Media', 2022, 'Teknologi', 8),
(39, 'Pemrograman Mobile Android', 'Fajar Nugroho', 'Andi Publisher', 2020, 'Teknologi', 11),
(40, 'Metodologi Penelitian', 'Sri Wahyuni', 'Gramedia', 2017, 'Pendidikan', 5),
(41, 'Startup dan Inovasi', 'Kevin Aditya', 'Informatika', 2023, 'Bisnis', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
