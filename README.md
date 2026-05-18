# Tradelab.id — Responsive Trading Education Website

## Cara menjalankan

1. Ekstrak folder ZIP.
2. Buka `index.html` di browser.
3. Gunakan tombol Google/Apple untuk demo auth, atau buat akun manual.
4. Data sementara tersimpan di `localStorage` browser.

## File penting

- `index.html` — struktur halaman dasar.
- `style.css` — seluruh tampilan, responsif, warna, spacing, card, navbar, dan animasi ringan.
- `script.js` — routing halaman, login/register demo, materi, quiz, progress, streak, language switch, dan reminder.
- `assets/google-logo.svg` — logo Google.
- `assets/apple-logo.svg` — logo Apple.
- `DATABASE_XAMPP_TEMPLATE.sql` — rancangan awal tabel database untuk integrasi PHP/MySQL.
- `PENJELASAN_KODE.md` — penjelasan bagian kode untuk dipelajari.

## Catatan integrasi XAMPP

Frontend ini masih static. Untuk database sungguhan:

1. Import `DATABASE_XAMPP_TEMPLATE.sql` ke phpMyAdmin.
2. Buat file PHP API, misalnya `api/register.php`, `api/login.php`, `api/progress.php`.
3. Ganti bagian `localStorage` pada `script.js` menjadi request `fetch()` ke PHP API.
4. Simpan password memakai `password_hash()` di PHP, bukan teks biasa.

## Catatan desain

Hasil ini dibuat high-fidelity berdasarkan screenshot. Untuk pixel-perfect 100%, dibutuhkan file Figma asli, ukuran frame, asset gambar, font token, icon SVG asli, dan export komponen dari Figma.
