# Tradelab.id — Responsive Trading Education Website

## Cara menjalankan

1. Ekstrak folder ZIP.
2. Buka `index.html` di browser.
3. Gunakan tombol Google/Apple untuk demo auth, atau buat akun manual.
4. Data sementara tersimpan di `localStorage` browser.

## File penting

- `index.html` — struktur halaman dasar.
- `style.css` — seluruh tampilan, responsif, warna, spacing, card, navbar, dan animasi ringan.
- `script.js` — routing halaman, login/register demo, materi, quiz, progress, streak, language switch, reminder, dan link demo eksternal pada halaman Practice.
- `assets/google-logo.svg` — logo Google.
- `assets/apple-logo.svg` — logo Apple.
- `DATABASE_XAMPP_TEMPLATE.sql` — rancangan awal tabel database untuk integrasi PHP/MySQL.
- `PENJELASAN_KODE.md` — penjelasan bagian kode untuk dipelajari.

## Catatan revisi halaman Practice

Bagian Practice sekarang memiliki tombol **Open Demo Website** yang membuka website demo di tab baru. Revisi ini hanya mengubah `script.js`, `style.css`, dan `README.md`. File PHP seperti `login.php`, `register.php`, `session.php`, `save_progress.php`, `logout.php`, dan `config.php` tidak diubah.

URL demo eksternal dapat diganti pada konstanta berikut di `script.js`:

```js
const PRACTICE_DEMO_URL = "https://www.tradingview.com/chart/";
```

## Catatan integrasi XAMPP

Integrasi XAMPP bersifat opsional. Revisi Practice tidak membutuhkan perubahan ke PHP karena tombol demo hanya memakai link eksternal biasa.

## Catatan desain

Hasil ini dibuat high-fidelity berdasarkan screenshot. Untuk pixel-perfect 100%, dibutuhkan file Figma asli, ukuran frame, asset gambar, font token, icon SVG asli, dan export komponen dari Figma.


## Catatan revisi language switch

Bahasa dasar aplikasi tetap English. Menu `Language` sekarang memiliki dua opsi, yaitu `English (US)` dan `Bahasa Indonesia`. Jika pengguna memilih Bahasa Indonesia, seluruh teks frontend utama, menu, halaman login, daftar, learn, games, practice, profile, settings, kuis, notifikasi, pesan validasi, materi, dan tombol akan berubah ke Bahasa Indonesia.

Revisi ini hanya mengubah `script.js` dan `README.md`. File PHP tidak diubah.


## Revisi final language switch

Bahasa dasar aplikasi tetap English. Pilihan Bahasa Indonesia pada menu Language sekarang disimpan di localStorage dan data user, lalu seluruh tampilan frontend dirender ulang memakai kamus `i18n`, `COURSES_BY_LANG`, dan `QUIZ_QUESTIONS_BY_LANG`. File PHP tidak diubah.


## Catatan revisi tampilan terakhir

Revisi terakhir menghapus semua teks dolar yang tampil pada frontend. Bagian kanan atas header sekarang menampilkan jumlah hari belajar disertai ikon api. Mode bahasa juga dipertahankan melalui `localStorage`, sehingga pilihan English atau Bahasa Indonesia tetap tersimpan saat halaman dirender ulang. File PHP tidak diubah.


## Revisi Streak Pojok Kanan Atas

- Tulisan `Streak` di pojok kanan atas diganti menjadi label jumlah hari.
- Mode English menampilkan `Days + angka + logo api`.
- Mode Bahasa Indonesia menampilkan `Jumlah Hari + angka + logo api`.
- File PHP tidak diubah.


## Revisi Streak 3🔥

- Tampilan streak di pojok kanan atas dibuat ringkas menjadi angka + ikon api, contoh: `3🔥`.
- Tulisan `Days` atau `Jumlah Hari` tidak ditampilkan lagi di bagian atas.
- File PHP tidak diubah.


## Revisi Learn Trading Basics Modern

- Isi materi Trading Basics diperbanyak dan diringkas secara profesional.
- Chapter Trading Basics tetap berjumlah 7, tetapi isi tiap chapter dibuat lebih lengkap, jelas, dan mudah dibaca.
- Tampilan halaman course dan lesson dibuat lebih modern dengan overview card, nomor chapter, kartu ringkas, note box, dan layout yang lebih rapi.
- Mode bahasa tetap menggunakan English sebagai bahasa dasar dan Bahasa Indonesia sebagai pilihan.
- File PHP tidak diubah.
