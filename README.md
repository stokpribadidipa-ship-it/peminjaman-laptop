# PinjamLaptop — Aplikasi Peminjaman Laptop Sekolah

Frontend prototype dengan **database dummy berbasis LocalStorage**. Struktur role dan halaman mengikuti project asli: Admin, Petugas, dan Siswa.

## Tampilan
- Tema futuristik dark navy / cyan
- Glassmorphism ringan
- Grid/scanline background
- Sidebar dan topbar responsif
- Animasi halus dan ringan
- Tidak memakai video, WebGL, atau particle berat

## Role
**Admin:** Dashboard, Siswa, Petugas, User, Laptop, Peminjaman, Pengembalian, Laporan, Pengaturan.

**Petugas:** Dashboard, Laptop, Permintaan Peminjaman, Pengembalian, Peminjaman Aktif, Riwayat.

**Siswa:** Dashboard, Laptop, Ajukan Peminjaman, Status, Peminjaman Aktif, Riwayat.

## Database Dummy
Data awal ada di `assets/js/data.js` dan otomatis disimpan ke LocalStorage browser. Tidak membutuhkan MySQL/PHP.

Akun demo:
- Admin: `admin / admin123`
- Petugas: `petugas / petugas123`
- Siswa: `siswa / siswa123`

## Menjalankan
Buka `index.html` langsung di browser atau gunakan Live Server.
