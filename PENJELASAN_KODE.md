# Penjelasan Kode Tradelab.id

Dokumen ini menjelaskan struktur kode secara praktis agar mudah dipelajari.

## 1. `index.html`

### `<!DOCTYPE html>`
Menandakan bahwa dokumen menggunakan HTML5.

### `<html lang="en">`
Menentukan bahasa awal halaman sebagai English.

### `<meta charset="UTF-8">`
Agar karakter teks, simbol, dan tanda baca terbaca dengan benar.

### `<meta name="viewport" ...>`
Membuat tampilan responsif di HP, tablet, dan desktop.

### Google Fonts
File memakai font Inter karena mirip dengan tampilan modern pada desain Figma.

### `<link rel="stylesheet" href="style.css">`
Menghubungkan HTML ke file CSS.

### `<div id="app"></div>`
Seluruh halaman aplikasi dirender oleh JavaScript ke elemen ini.

### `<script src="script.js"></script>`
Menghubungkan HTML ke JavaScript.

---

## 2. `style.css`

### `:root`
Berisi variabel warna, radius, shadow, dan font. Contoh:

- `--bg` untuk warna latar.
- `--green` untuk warna hijau utama.
- `--panel` untuk warna card.
- `--radius-xl` untuk sudut card besar.

### `.phone-shell`
Container utama aplikasi. Pada HP lebarnya mengikuti layar. Pada desktop menjadi layout lebih besar.

### `.screen`
Area konten utama di dalam aplikasi.

### `.auth-screen`
Area khusus halaman login dan signup.

### `.auth-panel`
Card login yang diberi efek modern: gradient, border, shadow, dan glass effect.

### `.form-input`, `.form-select`, `.time-input`
Mengatur tampilan input agar konsisten.

### `.primary-btn`
Tombol utama hijau dengan efek glow.

### `.social-btn`
Tombol login Google dan Apple. Logo berasal dari file SVG di folder `assets`.

### `.icon-svg`
Class umum untuk semua ikon SVG di navbar, card, profile, dan settings.

### `.bottom-nav`
Navbar bawah. Isinya: Learn, Games, Practice, Profile, Settings.

### Media query `@media (min-width: 860px)`
Mengubah layout menjadi desktop saat layar cukup lebar.

---

## 3. `script.js`

### `STORAGE_USERS`
Nama key untuk menyimpan data user sementara di localStorage.

### `STORAGE_SESSION`
Nama key untuk menyimpan sesi login sementara.

### `i18n`
Object terjemahan untuk bahasa English dan Indonesia.

### `ICONS`
Kumpulan ikon SVG inline. Ini menggantikan emoji agar tampilan lebih profesional.

### `icon(name)`
Fungsi untuk menampilkan ikon SVG berdasarkan nama.

### `socialLogo(name)`
Fungsi untuk menampilkan logo Google atau Apple dari folder `assets`.

### `brandAvatar()`
Fungsi untuk menampilkan avatar user berbentuk SVG.

### `COURSES`
Data seluruh materi belajar. Setiap course berisi:

- `id`
- `title`
- `subtitle`
- `tag`
- `intro`
- `chapters`

### `QUIZ_QUESTIONS`
Data soal quiz pilihan ganda.

### `loadUsers()`
Mengambil data user dari localStorage.

### `saveUsers(users)`
Menyimpan data user ke localStorage.

### `currentUser()`
Mengambil user yang sedang login.

### `createUser()`
Membuat akun baru dengan nama random jika nama tidak diisi.

### `demoAuth()`
Membuat akun demo saat tombol Google/Apple ditekan.

### `renderLogin()`
Menampilkan halaman login.

### `renderSignup()`
Menampilkan halaman pendaftaran.

### `renderLearn()`
Menampilkan halaman utama belajar.

### `renderCourse(courseId)`
Menampilkan daftar chapter dari course tertentu.

### `renderLesson(courseId, chapterIndex)`
Menampilkan isi materi setiap chapter.

### `renderGames()`
Menampilkan halaman games.

### `renderQuiz()`
Menampilkan soal quiz pilihan ganda.

### `renderProfile()`
Menampilkan progress, streak, statistik, dan achievement.

### `renderSettings()`
Menampilkan pengaturan bahasa dan learning reminder.

### `renderPractice()`
Menampilkan halaman practice setelah tombol Practice pada navbar.

### `handleClick(event)`
Mengatur semua tombol yang bisa ditekan, termasuk navigasi halaman.

### `handleSubmit(event)`
Mengatur submit form login, signup, dan quiz.

---

## 4. Cara menghubungkan ke database XAMPP

Bagian yang perlu diganti adalah fungsi yang memakai `localStorage`.

Contoh saat ini:

```js
localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
```

Nanti dapat diganti menjadi:

```js
fetch("api/register.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(userData)
});
```

## 5. Catatan keamanan

Untuk produksi:

- Jangan simpan password di localStorage.
- Jangan simpan password plain text di database.
- Gunakan `password_hash()` dan `password_verify()` di PHP.
- Gunakan validasi server-side.
- Gunakan HTTPS saat online.
