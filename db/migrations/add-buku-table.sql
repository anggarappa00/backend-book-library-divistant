CREATE TABLE buku (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(200),
  penulis VARCHAR(100),
  penerbit VARCHAR(100),
  tahun_terbit INT,
  kategori VARCHAR(50),
  stok INT
);