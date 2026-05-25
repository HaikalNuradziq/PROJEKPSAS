const STORAGE_USERS = "tradelab_users_v1";
const STORAGE_SESSION = "tradelab_session_v1";
const STORAGE_LANGUAGE = "tradelab_language_v1";
const DEFAULT_BALANCE = 4250;
const PRACTICE_DEMO_URL = "https://www.tradingview.com/chart/";
const app = document.getElementById("app");

const i18n = {
  "en": {
    "documentTitle": "Tradelab.id — Trading Education",
    "learn": "Learn",
    "games": "Games",
    "practice": "Practice",
    "profile": "Profile",
    "settings": "Settings",
    "startLearning": "Start Learning",
    "startChallenge": "Start Challenge",
    "playNow": "Play Now",
    "viewAll": "View All",
    "signOut": "Sign Out from All Devices",
    "reminderText": "Daily market brief",
    "editName": "Edit Display Name",
    "saveName": "Save Name",
    "markRead": "Mark Chapter as Read",
    "completed": "Completed",
    "back": "Back",
    "language": "Language",
    "learningReminders": "Learning Reminders",
    "quizMaster": "Quiz Master",
    "submitQuiz": "Submit Quiz",
    "simulatedProfit": "Simulated Profit",
    "lessonsLearned": "Lessons Learned",
    "testsPassed": "Tests Passed",
    "currentStreak": "Current Streak",
    "recentBadges": "Recent Badges",
    "daysStreak": "Days Streak",
    "startJourneyTitle": "Start Learning Journey",
    "startJourneySubtitle": "Access trading lessons, practice, and progress tracking in one dashboard.",
    "email": "Email",
    "institutionalEmail": "Institutional Email",
    "password": "Security Key (Password)",
    "passwordSimple": "Password",
    "forgotPassword": "Forgot Password?",
    "signInDashboard": "Sign In to Dashboard",
    "quickSignIn": "Quick Sign In",
    "noAccount": "New here?",
    "signUp": "Sign Up",
    "createAccountTitle": "Create Account",
    "createAccountSubtitle": "Start learning trading basics and track your progress today.",
    "fullName": "Full Name",
    "fullNamePlaceholder": "Enter your full name",
    "createAccount": "Create Account",
    "orRegisterWith": "Or Register With",
    "alreadyHaveAccount": "Already have an account?",
    "signIn": "Sign In",
    "heroPill": "Beginner Path",
    "heroTitle": "Trading Basics",
    "heroCopy": "Master the fundamentals of the global markets in 15 minutes.",
    "knowledgeHub": "Knowledge Hub",
    "dailyTipTitle": "Daily Tip: Risk Management",
    "dailyTipText": "Never risk more than 1% of your total portfolio on a single trade. Preservation is key.",
    "chapterShort": "Ch",
    "chapter": "Chapter",
    "candlestickAria": "Candlestick open high low close diagram",
    "upperWick": "Upper Wick",
    "lowerWick": "Lower Wick",
    "open": "Open",
    "close": "Close",
    "dailyChallenge": "Daily Challenge",
    "patternHunterChallenge": "Pattern Hunter Challenge",
    "patternHunterCopy": "Identify 10 consecutive candlestick patterns in a volatile market simulation to earn a Rare Analyst Badge.",
    "arcadeFloor": "Arcade Floor",
    "patternHunter": "Pattern Hunter",
    "patternHunterDesc": "Master technical analysis by spotting head-and-shoulders, flags, wedges, and reversals.",
    "bestScore": "Best Score",
    "quizMasterDesc": "Challenge your macro-economic knowledge. Do you know how the Fed affects your portfolio?",
    "rank": "Rank",
    "globalTop": "Global Top 5%",
    "newsReaction": "News Reaction",
    "newsReactionDesc": "Predict market movement based on breaking headlines. Speed and accuracy are key.",
    "quizSubtitle": "10 multiple-choice questions based on the Learn materials.",
    "completion": "Completion",
    "advanced": "Advanced",
    "intermediate": "Intermediate",
    "beginner": "Beginner",
    "level": "Level",
    "knowledgeJourney": "Knowledge Journey",
    "knowledgeJourneyCopy": "You're making steady progress through the market fundamentals. Keep going.",
    "day": "Day",
    "days": "Days",
    "settingsSubtitle": "Customize your analytical environment",
    "simulator": "Simulator",
    "simulatorSettings": "Real-time market engine settings",
    "at": "at",
    "toggleReminder": "Toggle reminder",
    "saveReminderTime": "Save Reminder Time",
    "languageDesc": "Select your primary interface language",
    "feedback": "Feedback",
    "feedbackDesc": "Help us improve the analyst experience",
    "versionText": "Version 1.0.0 - Stable • © 2026 Analyst Inc.",
    "practiceSubtitle": "Practice reading trends, support, resistance, and pattern signals.",
    "externalDemo": "External Demo",
    "marketReplayLab": "Market Replay Lab",
    "practiceDemoCopy": "Open the demo chart on a separate website to practice reading market movement. This button only opens a new tab, so it does not change the existing HTML, CSS, JavaScript, or PHP flow in this project.",
    "openDemoWebsite": "Open Demo Website",
    "openPracticeQuiz": "Open Practice Quiz",
    "trendReading": "Trend Reading",
    "trendReadingCopy": "Identify whether the market is forming higher highs, higher lows, lower highs, or lower lows.",
    "riskSetup": "Risk Setup",
    "riskSetupCopy": "Plan stop loss, position size, and risk-to-reward before entering a trade.",
    "journal": "Journal",
    "journalCopy": "Record your simulated trade reason, result, and lesson.",
    "emailExists": "Email already exists. Please sign in instead.",
    "loginWrong": "Wrong email or security key. Create an account first or use demo auth.",
    "demoUser": "Demo User",
    "notificationTitle": "Tradelab.id Learning Reminder",
    "notificationBody": "Open your daily market brief and keep your streak alive.",
    "notificationAlert": "Tradelab.id Learning Reminder: open your daily lesson and keep your streak alive.",
    "scoreLabel": "Your score: {score}/{total}",
    "quizCompleted": "Quiz completed. Your progress, balance, streak, and achievements have been updated.",
    "viewProfileProgress": "View Profile Progress",
    "backToGames": "Back to Games",
    "forgotPlaceholder": "Frontend placeholder: connect this button to your XAMPP/PHP password reset flow.",
    "feedbackPlaceholder": "Feedback form placeholder. Connect this to a database table or email endpoint."
  },
  "id": {
    "documentTitle": "Tradelab.id — Trading Education",
    "learn": "Belajar",
    "games": "Permainan",
    "practice": "Latihan",
    "profile": "Profil",
    "settings": "Pengaturan",
    "startLearning": "Mulai Belajar",
    "startChallenge": "Mulai Tantangan",
    "playNow": "Main Sekarang",
    "viewAll": "Lihat Semua",
    "signOut": "Keluar dari Semua Perangkat",
    "reminderText": "Pengingat belajar harian",
    "editName": "Ubah Nama Tampilan",
    "saveName": "Simpan Nama",
    "markRead": "Tandai Bab Sudah Dibaca",
    "completed": "Selesai",
    "back": "Kembali",
    "language": "Bahasa",
    "learningReminders": "Pengingat Belajar",
    "quizMaster": "Master Kuis",
    "submitQuiz": "Kirim Jawaban",
    "simulatedProfit": "Profit Simulasi",
    "lessonsLearned": "Materi Dibaca",
    "testsPassed": "Tes Selesai",
    "currentStreak": "Runtutan Hari",
    "recentBadges": "Lencana Terbaru",
    "daysStreak": "Hari Berturut-turut",
    "startJourneyTitle": "Mulai Perjalanan Belajar",
    "startJourneySubtitle": "Akses materi, latihan, dan progres belajar trading dalam satu dashboard.",
    "email": "Email",
    "institutionalEmail": "Email",
    "password": "Kata Sandi",
    "passwordSimple": "Kata Sandi",
    "forgotPassword": "Lupa Kata Sandi?",
    "signInDashboard": "Masuk ke Dashboard",
    "quickSignIn": "Masuk Cepat",
    "noAccount": "Belum punya akun?",
    "signUp": "Daftar",
    "createAccountTitle": "Buat Akun",
    "createAccountSubtitle": "Mulai belajar dasar trading dan pantau progres kamu hari ini.",
    "fullName": "Nama Lengkap",
    "fullNamePlaceholder": "Masukkan nama lengkap",
    "createAccount": "Buat Akun",
    "orRegisterWith": "Atau daftar dengan",
    "alreadyHaveAccount": "Sudah punya akun?",
    "signIn": "Masuk",
    "heroPill": "Jalur Pemula",
    "heroTitle": "Dasar Trading",
    "heroCopy": "Pahami dasar pasar global dalam 15 menit.",
    "knowledgeHub": "Pusat Pengetahuan",
    "dailyTipTitle": "Tips Harian: Manajemen Risiko",
    "dailyTipText": "Jangan mengambil risiko lebih dari 1% dari total portofolio dalam satu transaksi. Menjaga modal adalah kunci.",
    "chapterShort": "Bab",
    "chapter": "Bab",
    "candlestickAria": "Diagram candlestick open high low close",
    "upperWick": "Sumbu Atas",
    "lowerWick": "Sumbu Bawah",
    "open": "Open",
    "close": "Close",
    "dailyChallenge": "Tantangan Harian",
    "patternHunterChallenge": "Tantangan Pemburu Pola",
    "patternHunterCopy": "Kenali 10 pola candlestick berurutan dalam simulasi pasar volatil untuk mendapat Lencana Analis Langka.",
    "arcadeFloor": "Area Permainan",
    "patternHunter": "Pemburu Pola",
    "patternHunterDesc": "Kuasai analisis teknikal dengan mengenali head and shoulders, flag, wedge, dan pola pembalikan.",
    "bestScore": "Skor Terbaik",
    "quizMasterDesc": "Uji pengetahuan makroekonomi kamu. Apakah kamu tahu bagaimana The Fed memengaruhi portofolio?",
    "rank": "Peringkat",
    "globalTop": "5% Teratas Global",
    "newsReaction": "Reaksi Berita",
    "newsReactionDesc": "Prediksi pergerakan pasar berdasarkan berita terbaru. Kecepatan dan akurasi menjadi kunci.",
    "quizSubtitle": "10 soal pilihan ganda berdasarkan materi Belajar.",
    "completion": "Penyelesaian",
    "advanced": "Lanjutan",
    "intermediate": "Menengah",
    "beginner": "Pemula",
    "level": "Level",
    "knowledgeJourney": "Perjalanan Pengetahuan",
    "knowledgeJourneyCopy": "Kamu membuat progres yang stabil dalam memahami dasar pasar. Terus lanjutkan.",
    "day": "Hari",
    "days": "Hari",
    "settingsSubtitle": "Atur pengalaman belajar dan analisis kamu",
    "simulator": "Simulator",
    "simulatorSettings": "Pengaturan latihan pasar real-time",
    "at": "pukul",
    "toggleReminder": "Aktifkan atau nonaktifkan pengingat",
    "saveReminderTime": "Simpan Waktu Pengingat",
    "languageDesc": "Pilih bahasa utama tampilan",
    "feedback": "Masukan",
    "feedbackDesc": "Bantu kami meningkatkan pengalaman belajar",
    "versionText": "Versi 1.0.0 - Stabil • © 2026 Analyst Inc.",
    "practiceSubtitle": "Latihan membaca tren, support, resistance, dan sinyal pola.",
    "externalDemo": "Demo Eksternal",
    "marketReplayLab": "Lab Replay Pasar",
    "practiceDemoCopy": "Buka grafik demo di website lain untuk latihan membaca pergerakan pasar. Tombol ini hanya membuka tab baru, sehingga tidak mengubah alur HTML, CSS, JavaScript, atau PHP pada proyek ini.",
    "openDemoWebsite": "Buka Website Demo",
    "openPracticeQuiz": "Buka Kuis Latihan",
    "trendReading": "Membaca Tren",
    "trendReadingCopy": "Kenali apakah pasar membentuk higher high, higher low, lower high, atau lower low.",
    "riskSetup": "Pengaturan Risiko",
    "riskSetupCopy": "Rencanakan stop loss, ukuran posisi, dan rasio risiko terhadap imbal hasil sebelum masuk transaksi.",
    "journal": "Jurnal",
    "journalCopy": "Catat alasan, hasil, dan pelajaran dari transaksi simulasi.",
    "emailExists": "Email sudah terdaftar. Silakan masuk.",
    "loginWrong": "Email atau kata sandi salah. Buat akun terlebih dahulu atau gunakan masuk cepat.",
    "demoUser": "Pengguna Demo",
    "notificationTitle": "Pengingat Belajar Tradelab.id",
    "notificationBody": "Buka materi harian dan pertahankan runtutan belajarmu.",
    "notificationAlert": "Pengingat Belajar Tradelab.id: buka materi harian dan pertahankan runtutan belajarmu.",
    "scoreLabel": "Skor kamu: {score}/{total}",
    "quizCompleted": "Kuis selesai. Progres, saldo, runtutan belajar, dan pencapaian sudah diperbarui.",
    "viewProfileProgress": "Lihat Progres Profil",
    "backToGames": "Kembali ke Permainan",
    "forgotPlaceholder": "Placeholder frontend: hubungkan tombol ini ke alur reset kata sandi XAMPP/PHP.",
    "feedbackPlaceholder": "Placeholder formulir masukan. Hubungkan ke tabel database atau endpoint email."
  }
};

const ICONS = {
  book: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21V5.5Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 6a2.8 2.8 0 0 1 2.8-2.8M8 7h8M8 11h7" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  game: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.2 9.5h7.6M8.5 14.8 6.7 13m0 0-1.8 1.8M6.7 13v-2.5M17.2 11.2h.01M19.1 14h.01" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 6.5h9.6c2.2 0 4 1.6 4.3 3.8l.7 5.5c.3 2.4-2.2 4.2-4.2 2.9l-1.7-1.1H8.1l-1.7 1.1c-2 1.3-4.5-.5-4.2-2.9l.7-5.5c.3-2.2 2.1-3.8 4.3-3.8Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trend: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 17.5 9.4 12l3.4 3.2L20 7.8" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8 7.8H20V13" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chartDown: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5 9.4 13l3.4-3.2L20 17.2" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.8 17.2H20V12" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19V9m4 10V5m4 14v-7m4 7V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 19.5h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3v3m10-3v3M4.5 9.2h15" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
  light: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18h6M10 21h4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M8.2 14.8a6 6 0 1 1 7.6 0c-.8.6-1.3 1.4-1.5 2.2H9.7c-.2-.8-.7-1.6-1.5-2.2Z" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14M8 12h8M10 17h4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  news: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 5h12a1.5 1.5 0 0 1 1.5 1.5V19l-3-2h-10A1.5 1.5 0 0 1 5 15.5v-9A1.5 1.5 0 0 1 6.5 5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8 8.5h8M8 12h5" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  profile: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="1.9"/><path d="M4.5 20a7.5 7.5 0 0 1 15 0" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z" stroke="currentColor" stroke-width="1.9"/><path d="m19.4 13.5.1-1.5-.1-1.5 2-1.6-2-3.5-2.6 1a8 8 0 0 0-2.6-1.5L13.8 2h-3.6l-.4 2.9a8 8 0 0 0-2.6 1.5l-2.6-1-2 3.5 2 1.6L4.5 12l.1 1.5-2 1.6 2 3.5 2.6-1a8 8 0 0 0 2.6 1.5l.4 2.9h3.6l.4-2.9a8 8 0 0 0 2.6-1.5l2.6 1 2-3.5-2-1.6Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>`,
  language: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 5h9M8.5 3v2m1.2 0c-.8 3-2.7 5.5-5.2 7.4M6.4 8.2c1.2 1.8 2.9 3.3 5.1 4.5M14 21l4-9 4 9m-6.5-3h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  feedback: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5h14v10H8l-3 3V5Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="m9 12 4.8-4.8 2 2L11 14H9v-2Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 4h8v3a4 4 0 0 1-8 0V4Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8 6H5.5A2.5 2.5 0 0 0 8 10m8-4h2.5A2.5 2.5 0 0 1 16 10M12 11v5m-4 4h8m-6-4h4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  medal: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 3 3 6 3-6M12 9a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="m10.5 14 1 1 2-2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22c4 0 7-2.8 7-6.8 0-3.1-1.8-5.2-4.1-7.3.1 2.1-.7 3.2-1.9 4-1.1-3.3-3-5.7-6-7.9.4 3.1-.7 5.1-1.8 6.9A8 8 0 0 0 4 15.2C4 19.2 7.5 22 12 22Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
  wallet: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v2H6.5A2.5 2.5 0 0 1 4 6.5v11A2.5 2.5 0 0 0 6.5 20H20v-8h-4.2a2.8 2.8 0 0 0 0 5.6H20" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 14.8h.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6h16v12H4V6Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 10V8a5 5 0 0 1 10 0v2" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/><path d="M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" stroke-width="1.9"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.9"/></svg>`
};

function icon(name, className = "") {
  return `<span class="icon-svg ${className}" aria-hidden="true">${ICONS[name] || ICONS.chart}</span>`;
}

function socialLogo(name) {
  return `<img class="social-logo" src="assets/${name}-logo.svg" alt="${name === "google" ? "Google" : "Apple"} logo" />`;
}

function brandAvatar() {
  return `<svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="21" fill="#F6FFFB"/><path d="M14 39c1.8-7.2 5.2-10.1 10-10.1S32.2 31.8 34 39" fill="#9FEED2"/><circle cx="24" cy="19" r="7.1" fill="#F1C6A8"/><path d="M16.4 19.4c.1-6.1 4-10.2 8.9-10.2 4.2 0 7.1 2.9 7.5 7.4-3.7-.2-6.7-1.6-9.4-4.2-1.1 3.4-3.3 5.8-7 7Z" fill="#1F2937"/><path d="M16 39h16l-2.4-7.4a11.5 11.5 0 0 0-11.2 0L16 39Z" fill="#8FE1CB"/></svg>`;
}

const COURSES_BY_LANG = {
  en: [
  {
    id: "trading-basics",
    icon: "book",
    title: "Trading Basics",
    subtitle: "Learn how to trading",
    tag: "Beginner Path",
    intro: "Master the fundamentals of the global markets in 15 minutes.",
    hubTitle: "Knowledge Hub",
    chapters: [
      {
        title: "What Is Technical Analysis",
        subtitle: "Technical analysis basics",
        body: `
          <p><strong>Technical analysis</strong> is a method of evaluating securities by analyzing statistics generated by market activity, such as past prices and volume. It is primarily used to forecast the direction of prices through the study of past market data, primarily price and volume.</p>
          <p>Technical analysts believe that market trends, as shown by charts and other technical indicators, can help estimate future activity. They use tools and techniques to analyze the market and identify trading opportunities.</p>
          <p>One common tool in technical analysis is the use of technical indicators. Technical indicators are mathematical calculations based on market data, such as price and volume, that are used to forecast future price movements. Some common technical indicators include moving averages, relative strength index (RSI), and stochastic oscillator.</p>
          <p>Technical analysts also use chart patterns to forecast price movements. These patterns, such as head and shoulders and triangles, are formed by the price action of a security and can be used to identify possible buying and selling opportunities.</p>`
      },
      {
        title: "Key Terms Used In Technical Analysis",
        subtitle: "The vocabulary of price action",
        body: `
          <p>Think of technical analysis as reading the "vibe" of the market. Here is the vocabulary you need to know:</p>
          <h3>1. The Big Picture</h3>
          <ul><li><strong>Trend:</strong> The general direction of price. It can move up, down, or sideways.</li><li><strong>Asset Price vs. Asset Value:</strong> Price is what you pay right now. Value is what the asset may actually be worth.</li></ul>
          <h3>2. The Invisible Walls</h3>
          <ul><li><strong>Support:</strong> A price level where buying pressure is often strong enough to stop price from falling further.</li><li><strong>Resistance:</strong> A price level where selling pressure is often strong enough to stop price from rising further.</li></ul>
          <h3>3. The Gauges</h3>
          <ul><li><strong>Moving Averages:</strong> They smooth daily zig-zags to show the average path.</li><li><strong>Indicators:</strong> RSI, MACD, and similar tools act like dashboard gauges that help estimate whether the market is moving too fast or losing momentum.</li></ul>
          <h3>4. The Map Reading</h3>
          <ul><li><strong>Chart Patterns:</strong> Recognizable shapes such as triangles or head and shoulders that appear on the price graph.</li></ul>
          <p><strong>The takeaway:</strong> Technical analysis is not a crystal ball. It is closer to a weather report: it does not tell exactly what will happen, but it helps estimate likely scenarios from current market conditions.</p>`
      },
      {
        title: "The Limitations Of Technical Analysis",
        subtitle: "Where chart reading can fail",
        body: `
          <h3>1. The Rearview Mirror Problem</h3>
          <p>Technical analysis often uses past data to guess where price may go next. This is similar to driving while looking mainly at the rearview mirror. It can miss sudden events such as policy shocks, earnings surprises, exchange problems, wars, or unexpected macroeconomic news.</p>
          <h3>2. It Is an Art, Not a Precise Science</h3>
          <p>Charts, numbers, and formulas are involved, but interpretation is subjective. Two traders can read the same chart and reach opposite conclusions.</p>
          <ul><li>Trader A may see a breakout pattern.</li><li>Trader B may see a failed move and expect a reversal.</li></ul>
          <h3>3. The Self-Fulfilling Prophecy</h3>
          <p>Sometimes a level works because many traders believe it will work. If thousands of traders buy at a perceived support level, the combined behavior itself can push price upward.</p>
          <h3>4. Technical vs. Fundamental Balance</h3>
          <p>Technical analysis focuses on the "when" by looking at price movement and volume. Fundamental analysis focuses on the "what" by looking at business quality, earnings, industry conditions, and long-term value.</p>`
      },
      {
        title: "How Candlestick Patterns Work",
        subtitle: "Open, high, low, close, wick, and range",
        diagram: "candlestick",
        body: `
          <p>A candlestick chart is composed of individual candles. Traders use it to understand price action by identifying where the price opened, closed, reached its high, and reached its low during a specific period.</p>
          <p>The period represented by each candle depends on the time frame chosen by the trader. A daily candle shows the open, close, high, and low for one day. A 15-minute candle shows the same components for a 15-minute period.</p>
          <h3>Open Price</h3><p>The open price is the first price traded during the formation of a new candle.</p>
          <h3>High Price</h3><p>The high price is the highest traded price during the candle period.</p>
          <h3>Low Price</h3><p>The low price is the lowest traded price during the candle period.</p>
          <h3>Close Price</h3><p>The close price is the last price traded during the candle period.</p>
          <h3>The Wick</h3><p>The wick, also called the shadow, shows the extreme points reached beyond the candle body.</p>
          <h3>Direction</h3><p>If the close is above the open, the candle is usually green. If the close is below the open, the candle is usually red.</p>
          <h3>Range</h3><p>The range is calculated as the highest point minus the lowest point of the candle.</p>`
      },
      {
        title: "Charting On Different Time Frames",
        subtitle: "The zoom level of trading",
        body: `
          <p>A time frame is the amount of time represented by one candle or data point on a chart.</p>
          <h3>1. Short-Term: The Microscope</h3>
          <ul><li>Charts: 1-minute, 5-minute, 15-minute.</li><li>Used by day traders who enter and exit within hours.</li><li>High energy and noisy. Small price movements matter.</li></ul>
          <h3>2. Medium-Term: The Wide Angle</h3>
          <ul><li>Charts: 1-hour and 4-hour.</li><li>Used by swing traders who hold trades for days or weeks.</li><li>Reduces the noise of very short-term charts.</li></ul>
          <h3>3. Long-Term: The Satellite View</h3>
          <ul><li>Charts: Daily, weekly, monthly.</li><li>Used by investors who hold for months or years.</li><li>Useful for major support and resistance zones.</li></ul>
          <h3>The Multi-Time Frame Trick</h3>
          <p>Many traders look at two or three time frames. They use a higher time frame to read the big trend and a lower time frame to choose the entry point.</p>`
      },
      {
        title: "How To Identify Up & Down Trends",
        subtitle: "Higher highs, higher lows, lower highs, lower lows",
        body: `
          <p>In technical analysis, it is important to identify up and down trends before making trading decisions.</p>
          <p>An uptrend, also known as a bull market, is a period when prices are generally moving upward. On a chart, it often appears as a series of higher highs and higher lows.</p>
          <p>A downtrend, also known as a bear market, is a period when prices are generally moving downward. On a chart, it often appears as a series of lower highs and lower lows.</p>
          <h3>Key Signals</h3>
          <ul><li>Look at the overall direction of price movement.</li><li>Observe the slope of the trend line.</li><li>Use support and resistance levels to confirm trend structure.</li></ul>
          <p>In an uptrend, price often finds support and continues to rise. In a downtrend, price often finds resistance and continues to fall.</p>`
      },
      {
        title: "Support & Resistance",
        subtitle: "The floor and ceiling of price",
        body: `
          <p>Support and resistance are two fundamental concepts used to identify key levels in the price of a security or asset.</p>
          <h3>Support</h3>
          <p>Support is a price level where buying pressure is strong enough to prevent price from falling further. If an asset has traded between $50 and $60 for weeks, and price repeatedly bounces from $55, that level may be considered support.</p>
          <h3>Resistance</h3>
          <p>Resistance is the opposite of support. It is a price level where selling pressure is strong enough to prevent price from rising further. If price repeatedly falls after reaching $65, that level may be considered resistance.</p>
          <h3>How to Identify It</h3>
          <ul><li>Use horizontal levels where price has reversed multiple times.</li><li>Use trend lines, moving averages, or Fibonacci levels as additional tools.</li><li>The more often price respects a level, the more important it becomes.</li></ul>
          <h3>Using It in Trading</h3>
          <p>Common strategies include range trading near support and resistance, or breakout trading when price moves beyond these levels with strong confirmation.</p>`
      }
    ]
  },
  {
    id: "bullish-candlesticks",
    icon: "trend",
    title: "Bullish Signals",
    subtitle: "Learn bullish candlestick logic",
    tag: "Bullish Candlesticks",
    intro: "Harness the power of upward momentum and reversal signals.",
    hubTitle: "Bullish Candlesticks",
    chapters: [
      { title: "Hammer Pattern", subtitle: "Bullish reversal after decline", body: `<p>The Hammer candlestick pattern is a bullish reversal pattern that signals a potential turnaround in price. It typically forms after a downward trend and shows that sellers pushed price lower, but buyers regained control before the close.</p><h3>What It Looks Like</h3><ul><li>Small real body near the upper part of the candle.</li><li>Long lower shadow, usually at least twice the body.</li><li>Little or no upper shadow.</li></ul><h3>Why It Matters</h3><p>The long lower shadow suggests that bearish pressure was rejected. Confirmation is stronger when the next candle closes above the hammer high.</p>` },
      { title: "Morning Star", subtitle: "Three-candle bullish reversal", body: `<p>The Morning Star is a bullish reversal pattern formed by three candles. It often appears after a decline and indicates that bearish momentum is weakening.</p><h3>Structure</h3><ul><li>First candle: long bearish candle.</li><li>Second candle: small-bodied candle showing indecision.</li><li>Third candle: strong bullish candle closing into the body of the first candle.</li></ul><p>The pattern becomes stronger when supported by volume, support level rejection, or a broader bullish market context.</p>` },
      { title: "Three White Soldiers", subtitle: "Strong bullish continuation", body: `<p>The Three White Soldiers pattern is a bullish formation made of three consecutive bullish candles. Each candle opens within or near the previous candle body and closes higher.</p><h3>Interpretation</h3><p>The pattern reflects persistent buying pressure and can indicate a shift from consolidation or bearish sentiment toward bullish control.</p><h3>Confirmation</h3><p>It is more reliable when it appears after a downtrend, near support, or after a long period of sideways accumulation.</p>` },
      { title: "Bullish Engulfing", subtitle: "A larger bullish candle absorbs bearish pressure", body: `<p>The Bullish Engulfing pattern is a two-candle reversal signal. The first candle is bearish, and the second candle is a larger bullish candle that fully engulfs the body of the first candle.</p><h3>Pattern Psychology</h3><p>Sellers initially control the market, but buyers enter aggressively and close above the previous candle's open. This shows a strong shift in momentum.</p><h3>Location</h3><p>The signal is stronger after a pronounced downtrend or near an important support zone.</p>` },
      { title: "Bullish Three Line Strike", subtitle: "Continuation with temporary pullback", body: `<p>The Bullish Three Line Strike is a continuation pattern. It begins with three consecutive bullish candles, followed by a fourth bearish candle that opens higher and closes below the bodies of the previous candles.</p><p>Although the fourth candle looks bearish, the pattern often indicates a temporary pullback before the broader uptrend resumes.</p><h3>Risk Control</h3><p>Because the fourth candle can also signal a real reversal, traders should wait for confirmation and manage risk carefully.</p>` },
      { title: "Three Inside Up", subtitle: "Compact bullish reversal", body: `<p>The Three Inside Up pattern is a bullish reversal pattern that often appears after a downtrend. It begins with a bearish candle, followed by a smaller bullish candle inside the first candle, and ends with a bullish candle closing above the first candle's high.</p><h3>Meaning</h3><p>The first candle shows bearish control, the second shows hesitation, and the third confirms that buyers are gaining strength.</p>` },
      { title: "Dragonfly Doji", subtitle: "Rejection of lower prices", body: `<p>The Dragonfly Doji is a candle with open, high, and close near the same level, plus a long lower shadow. It often signals that sellers pushed price down but buyers regained control by the close.</p><h3>Use Case</h3><p>It is most useful near support after a decline. It should not be used alone; confirmation from the next candle is important.</p>` }
    ]
  },
  {
    id: "bearish-candlesticks",
    icon: "chartDown",
    title: "Bearish Logic",
    subtitle: "Identifying short opportunities in red markets.",
    tag: "Bearish Candlesticks",
    intro: "Learn how bearish reversal and continuation patterns warn of weakness.",
    hubTitle: "Bearish Candlesticks",
    chapters: [
      { title: "Evening Star", subtitle: "Bearish reversal from bullish momentum", body: `<p>The Evening Star is a bearish reversal pattern that appears after an uptrend. It suggests that bullish momentum is losing strength and sellers may begin to dominate.</p><h3>Structure</h3><ul><li>First candle: long bullish candle.</li><li>Second candle: small-bodied candle showing hesitation.</li><li>Third candle: bearish candle closing deeply into the first candle body.</li></ul><p>The pattern is stronger near resistance or after an extended rally.</p>` },
      { title: "Three Black Crows", subtitle: "Strong bearish sequence", body: `<p>The Three Black Crows pattern is a bearish reversal signal made of three consecutive bearish candles. Each candle closes lower and shows persistent selling pressure.</p><h3>Meaning</h3><p>It indicates that sellers are repeatedly taking control after each attempt by buyers to stabilize price.</p><h3>Confirmation</h3><p>It is stronger when it appears after a mature uptrend or near major resistance.</p>` },
      { title: "Hanging Man", subtitle: "Warning after an uptrend", body: `<p>The Hanging Man is a bearish candlestick pattern that forms after an uptrend. It has a small body near the top and a long lower shadow.</p><h3>Interpretation</h3><p>Although the candle may close near its opening level, the long lower shadow shows that sellers were able to push price down significantly during the session.</p><p>Confirmation is needed. A bearish candle after the Hanging Man strengthens the reversal signal.</p>` },
      { title: "Shooting Star", subtitle: "Upper-shadow rejection", body: `<p>The Shooting Star is a bearish reversal candle with a small body near the low and a long upper shadow. It usually appears after an uptrend.</p><h3>Meaning</h3><p>Buyers pushed price upward, but sellers rejected the move and forced price to close near the low. This shows weakening bullish control.</p>` },
      { title: "Bearish Engulfing", subtitle: "Large red candle overrides bullish control", body: `<p>The Bearish Engulfing pattern is a two-candle bearish reversal pattern. A bullish candle is followed by a larger bearish candle that completely engulfs the first candle's body.</p><h3>Pattern Psychology</h3><p>Buyers appear strong at first, but sellers enter aggressively and close below the previous candle's open. This can mark a shift toward bearish sentiment.</p>` },
      { title: "Bearish Three Line Strike", subtitle: "Continuation with temporary rebound", body: `<p>The Bearish Three Line Strike is a continuation pattern that appears during a downtrend. It starts with three bearish candles, then a fourth bullish candle temporarily rebounds into the prior bodies.</p><h3>Meaning</h3><p>The rebound can represent profit-taking, but the larger bearish trend may continue if sellers regain control.</p>` },
      { title: "Three Inside Down", subtitle: "Bearish reversal confirmation", body: `<p>The Three Inside Down is a bearish reversal pattern that appears after an uptrend. It begins with a bullish candle, followed by a smaller bearish candle inside the first candle, and ends with a bearish candle closing below the first candle's low.</p><h3>Pattern Psychology</h3><p>Initial optimism fades, hesitation appears, and the third candle confirms that sellers are taking control.</p>` }
    ]
  },
  {
    id: "technical-indicators",
    icon: "chart",
    title: "Technical Indicators",
    subtitle: "RSI, MACD, and moving averages explained simply.",
    tag: "Technical Indicators",
    intro: "Use indicators as gauges, not as perfect predictions.",
    hubTitle: "Technical Indicators",
    chapters: [
      { title: "Moving Averages", subtitle: "Smoothing market noise", body: `<p>The moving average is one of the most popular tools in technical analysis. It smooths price data to create a single flowing line that makes it easier to identify direction.</p><h3>SMA</h3><p>A Simple Moving Average is calculated by adding closing prices over a selected period and dividing by the number of periods.</p><h3>EMA</h3><p>An Exponential Moving Average gives greater weight to recent prices, so it reacts faster to price changes.</p><h3>How Traders Use It</h3><ul><li>Identify trend direction.</li><li>Observe support and resistance around moving-average zones.</li><li>Watch crossovers between short and long averages.</li></ul>` },
      { title: "One Balance Volume (OBV)", subtitle: "Volume pressure indicator", body: `<p>On-Balance Volume, or OBV, is an indicator that uses volume flow to estimate buying and selling pressure. If price rises on strong volume, OBV increases. If price falls on strong volume, OBV decreases.</p><h3>Interpretation</h3><p>Rising OBV can support a bullish thesis. Falling OBV can support a bearish thesis. Divergence between OBV and price can warn that momentum is weakening.</p>` },
      { title: "Relative Strength Index (RSI)", subtitle: "Momentum and overbought/oversold zones", body: `<p>RSI is a momentum oscillator that measures the speed and size of recent price changes. It usually ranges from 0 to 100.</p><ul><li>Above 70 is often interpreted as overbought.</li><li>Below 30 is often interpreted as oversold.</li><li>Divergences can warn of weakening momentum.</li></ul><p>RSI should be combined with trend context because strong trends can remain overbought or oversold for extended periods.</p>` },
      { title: "Stochastic Oscillator", subtitle: "Price position in recent range", body: `<p>The Stochastic Oscillator compares the closing price to the recent high-low range. It helps estimate whether price is closing near the top or bottom of its recent range.</p><p>Readings above 80 may indicate overbought conditions. Readings below 20 may indicate oversold conditions, but confirmation is still required.</p>` },
      { title: "Bollinger Bands", subtitle: "Volatility envelopes", body: `<p>Bollinger Bands consist of a moving average and two bands placed above and below it. The bands expand when volatility rises and contract when volatility falls.</p><h3>Common Uses</h3><ul><li>Identify volatility expansion.</li><li>Spot possible mean reversion zones.</li><li>Observe breakouts after band contraction.</li></ul>` },
      { title: "MACD", subtitle: "Trend and momentum signal", body: `<p>MACD stands for Moving Average Convergence Divergence. It compares two exponential moving averages and includes a signal line.</p><h3>Interpretation</h3><ul><li>MACD crossing above the signal line can be bullish.</li><li>MACD crossing below the signal line can be bearish.</li><li>Histogram expansion can show strengthening momentum.</li></ul>` },
      { title: "Fibonacci Retracement", subtitle: "Potential pullback zones", body: `<p>Fibonacci retracement is used to estimate possible support and resistance during pullbacks. Common levels include 23.6%, 38.2%, 50%, 61.8%, and 78.6%.</p><p>These levels are not magic. Their value comes from how traders collectively watch them and combine them with structure, trend, and volume.</p>` }
    ]
  },
  {
    id: "fundamental-analysis",
    icon: "calendar",
    title: "Fundamental Analysis",
    subtitle: "News, earnings reports, and global macro factors.",
    tag: "Fundamental Analysis",
    intro: "Understand the value behind the price movement.",
    hubTitle: "Fundamental Analysis",
    chapters: [
      { title: "Fundamental Analysis Basics", subtitle: "Looking at actual value", body: `<p>Fundamental analysis evaluates the intrinsic value of an asset by examining economic, financial, and qualitative factors. In stocks, it looks at company earnings, management quality, industry position, and future growth.</p><h3>Economic Factors</h3><p>Interest rates, inflation, employment, currency movement, and consumer spending can affect market value.</p><h3>Company Factors</h3><p>Revenue, profit margins, debt, cash flow, and competitive advantage help investors estimate business quality.</p>` },
      { title: "Financial Statements", subtitle: "Reading business health", body: `<p>Financial statements provide information about performance and position. The three main statements are the income statement, balance sheet, and cash flow statement.</p><h3>Income Statement</h3><p>Shows revenue, expenses, and profit over a period.</p><h3>Balance Sheet</h3><p>Shows assets, liabilities, and equity at a specific point in time.</p><h3>Cash Flow Statement</h3><p>Shows how cash moves through operations, investing, and financing activities.</p>` },
      { title: "Company Fundamentals", subtitle: "Earnings, margins, debt, and growth", body: `<p>Company fundamentals help investors understand whether a company is healthy and potentially undervalued or overvalued.</p><ul><li><strong>Earnings:</strong> Profit generated by the company.</li><li><strong>Margins:</strong> Profitability after costs.</li><li><strong>Debt:</strong> Financial obligation that can increase risk.</li><li><strong>Growth:</strong> Expansion in sales, earnings, or market share.</li></ul>` },
      { title: "Industry Analysis", subtitle: "Business context matters", body: `<p>Industry analysis examines the broader environment around a company. A strong company in a declining industry may face pressure, while an average company in a growing industry may benefit from tailwinds.</p><h3>Factors to Review</h3><ul><li>Market size and growth rate.</li><li>Competition and barriers to entry.</li><li>Regulation and technology shifts.</li><li>Supply chain and customer behavior.</li></ul>` },
      { title: "Valuation Techniques", subtitle: "Estimating fair value", body: `<p>Valuation techniques help investors estimate what an asset may be worth. They are not exact answers, but structured ways to think about price and value.</p><h3>Common Methods</h3><ul><li>Discounted Cash Flow, which estimates future cash flows and discounts them to present value.</li><li>Comparable Company Analysis, which compares valuation ratios with similar companies.</li><li>Price-to-Earnings and Price-to-Book ratios, which compare market price to accounting measures.</li></ul>` },
      { title: "Accounting Principles", subtitle: "Rules behind the numbers", body: `<p>Accounting principles guide how companies record transactions and report performance. Understanding these principles helps investors interpret financial reports more carefully.</p><h3>Important Concepts</h3><ul><li>Revenue recognition.</li><li>Matching principle.</li><li>Depreciation and amortization.</li><li>Accrual accounting.</li></ul>` },
      { title: "Market Analysis", subtitle: "Combining market structure and fundamentals", body: `<p>Market analysis looks beyond one company. It examines sector performance, macroeconomic conditions, investor sentiment, liquidity, and risk appetite.</p><p>Good investors combine technical context with fundamental context instead of relying on only one tool. Technical analysis can help with timing; fundamental analysis can help with long-term conviction.</p>` }
    ]
  }
],
  id: [
  {
    id: "trading-basics",
    icon: "book",
    title: "Dasar Trading",
    subtitle: "Pelajari dasar membaca pasar",
    tag: "Jalur Pemula",
    intro: "Pahami dasar pasar global dalam 15 menit.",
    hubTitle: "Pusat Pengetahuan",
    chapters: [
      {
        title: "Apa Itu Analisis Teknikal",
        subtitle: "Dasar analisis teknikal",
        body: `
          <p><strong>Analisis teknikal</strong> adalah cara menilai pergerakan harga dengan membaca data pasar, terutama harga masa lalu dan volume. Trader memakai analisis ini untuk memperkirakan arah harga melalui pola, tren, dan indikator.</p>
          <p>Analis teknikal percaya bahwa pergerakan harga di grafik dapat memberi petunjuk tentang kondisi pasar. Mereka memakai alat bantu seperti indikator, garis tren, serta pola grafik untuk mencari peluang beli dan jual.</p>
          <p>Indikator teknikal adalah perhitungan berdasarkan data pasar. Contohnya adalah moving average, relative strength index (RSI), dan stochastic oscillator.</p>
          <p>Trader juga memakai pola grafik seperti head and shoulders, triangle, support, dan resistance untuk membaca kemungkinan arah harga berikutnya.</p>`
      },
      {
        title: "Istilah Penting dalam Analisis Teknikal",
        subtitle: "Kosakata dasar pergerakan harga",
        body: `
          <p>Analisis teknikal membantu trader membaca kondisi pasar melalui bahasa grafik. Beberapa istilah berikut perlu dipahami terlebih dahulu.</p>
          <h3>1. Gambaran Besar</h3>
          <ul><li><strong>Tren:</strong> arah umum pergerakan harga. Harga dapat naik, turun, atau bergerak mendatar.</li><li><strong>Harga Aset dan Nilai Aset:</strong> harga adalah angka yang dibayar saat ini, sedangkan nilai adalah perkiraan kelayakan aset tersebut.</li></ul>
          <h3>2. Area Batas Harga</h3>
          <ul><li><strong>Support:</strong> area harga ketika tekanan beli sering muncul dan menahan harga agar tidak turun lebih jauh.</li><li><strong>Resistance:</strong> area harga ketika tekanan jual sering muncul dan menahan harga agar tidak naik lebih jauh.</li></ul>
          <h3>3. Alat Ukur Pasar</h3>
          <ul><li><strong>Moving Average:</strong> garis rata-rata harga yang membantu merapikan pergerakan harga harian.</li><li><strong>Indikator:</strong> RSI, MACD, dan alat sejenis yang membantu membaca momentum pasar.</li></ul>
          <h3>4. Membaca Pola</h3>
          <ul><li><strong>Pola Grafik:</strong> bentuk tertentu pada grafik, seperti triangle atau head and shoulders, yang dapat memberi sinyal peluang.</li></ul>
          <p><strong>Intinya:</strong> analisis teknikal bukan alat yang menjamin masa depan. Analisis ini membantu trader menyusun skenario berdasarkan kondisi pasar saat ini.</p>`
      },
      {
        title: "Keterbatasan Analisis Teknikal",
        subtitle: "Bagian yang perlu diwaspadai",
        body: `
          <h3>1. Bergantung pada Data Masa Lalu</h3>
          <p>Analisis teknikal memakai data lama untuk memperkirakan arah berikutnya. Karena itu, analisis ini dapat gagal membaca peristiwa mendadak seperti kebijakan pemerintah, laporan keuangan, gangguan bursa, perang, atau berita makroekonomi yang tidak terduga.</p>
          <h3>2. Membutuhkan Interpretasi</h3>
          <p>Grafik, angka, dan rumus memang digunakan. Namun, pembacaannya tetap dapat berbeda antarseorang trader. Dua trader bisa melihat grafik yang sama, tetapi mengambil kesimpulan berbeda.</p>
          <ul><li>Trader A dapat melihat sinyal breakout.</li><li>Trader B dapat melihat sinyal gagal naik dan menunggu pembalikan arah.</li></ul>
          <h3>3. Efek Keyakinan Bersama</h3>
          <p>Kadang sebuah level harga bekerja karena banyak trader mempercayainya. Jika banyak trader membeli pada area support, tindakan mereka dapat ikut mendorong harga naik.</p>
          <h3>4. Perlu Seimbang dengan Fundamental</h3>
          <p>Analisis teknikal membantu menjawab kapan harga menarik untuk diamati. Analisis fundamental membantu menjawab apa nilai dan kualitas aset tersebut.</p>`
      },
      {
        title: "Cara Kerja Pola Candlestick",
        subtitle: "Open, high, low, close, wick, dan range",
        diagram: "candlestick",
        body: `
          <p>Grafik candlestick terdiri dari beberapa candle. Trader memakainya untuk melihat harga pembukaan, penutupan, harga tertinggi, dan harga terendah dalam satu periode.</p>
          <p>Periode setiap candle bergantung pada time frame yang dipilih. Candle harian menunjukkan data satu hari. Candle 15 menit menunjukkan data selama 15 menit.</p>
          <h3>Harga Open</h3><p>Harga open adalah harga pertama yang terbentuk saat candle baru dimulai.</p>
          <h3>Harga High</h3><p>Harga high adalah harga tertinggi yang tercapai selama periode candle.</p>
          <h3>Harga Low</h3><p>Harga low adalah harga terendah yang tercapai selama periode candle.</p>
          <h3>Harga Close</h3><p>Harga close adalah harga terakhir saat candle selesai terbentuk.</p>
          <h3>Wick atau Shadow</h3><p>Wick menunjukkan titik ekstrem harga di luar badan candle.</p>
          <h3>Arah Candle</h3><p>Jika close berada di atas open, candle biasanya berwarna hijau. Jika close berada di bawah open, candle biasanya berwarna merah.</p>
          <h3>Range</h3><p>Range adalah selisih antara harga tertinggi dan harga terendah dalam satu candle.</p>`
      },
      {
        title: "Membaca Grafik pada Berbagai Time Frame",
        subtitle: "Tingkat zoom dalam trading",
        body: `
          <p>Time frame adalah rentang waktu yang diwakili oleh satu candle atau satu titik data pada grafik.</p>
          <h3>1. Jangka Pendek</h3>
          <ul><li>Contoh grafik: 1 menit, 5 menit, dan 15 menit.</li><li>Umumnya dipakai day trader yang masuk dan keluar pasar dalam hitungan jam.</li><li>Pergerakannya cepat dan banyak noise.</li></ul>
          <h3>2. Jangka Menengah</h3>
          <ul><li>Contoh grafik: 1 jam dan 4 jam.</li><li>Umumnya dipakai swing trader yang menahan posisi beberapa hari atau minggu.</li><li>Noise lebih kecil dibanding time frame sangat pendek.</li></ul>
          <h3>3. Jangka Panjang</h3>
          <ul><li>Contoh grafik: harian, mingguan, dan bulanan.</li><li>Umumnya dipakai investor yang menahan posisi lebih lama.</li><li>Berguna untuk melihat area support dan resistance besar.</li></ul>
          <h3>Trik Multi-Time Frame</h3>
          <p>Banyak trader memakai dua atau tiga time frame. Time frame besar dipakai untuk membaca arah utama. Time frame kecil dipakai untuk memilih titik masuk.</p>`
      },
      {
        title: "Cara Mengenali Tren Naik dan Tren Turun",
        subtitle: "Higher high, higher low, lower high, dan lower low",
        body: `
          <p>Dalam analisis teknikal, trader perlu mengenali tren sebelum mengambil keputusan.</p>
          <p>Tren naik terjadi ketika harga secara umum bergerak ke atas. Pada grafik, tren ini sering terlihat melalui rangkaian higher high dan higher low.</p>
          <p>Tren turun terjadi ketika harga secara umum bergerak ke bawah. Pada grafik, tren ini sering terlihat melalui rangkaian lower high dan lower low.</p>
          <h3>Sinyal Utama</h3>
          <ul><li>Perhatikan arah umum pergerakan harga.</li><li>Amati kemiringan garis tren.</li><li>Gunakan support dan resistance untuk memastikan struktur tren.</li></ul>
          <p>Pada tren naik, harga sering memantul dari support dan melanjutkan kenaikan. Pada tren turun, harga sering tertahan di resistance dan melanjutkan penurunan.</p>`
      },
      {
        title: "Support dan Resistance",
        subtitle: "Area bawah dan atas harga",
        body: `
          <p>Support dan resistance adalah dua konsep dasar untuk membaca area penting pada harga aset.</p>
          <h3>Support</h3>
          <p>Support adalah area ketika tekanan beli cukup kuat untuk menahan harga agar tidak turun lebih jauh. Jika harga sering memantul dari area tertentu, area itu dapat dianggap sebagai support.</p>
          <h3>Resistance</h3>
          <p>Resistance adalah kebalikan dari support. Area ini menunjukkan tempat tekanan jual cukup kuat untuk menahan harga agar tidak naik lebih jauh.</p>
          <h3>Cara Mengenalinya</h3>
          <ul><li>Gunakan level horizontal ketika harga beberapa kali berbalik arah.</li><li>Gunakan garis tren, moving average, atau Fibonacci sebagai alat tambahan.</li><li>Semakin sering harga menghormati sebuah level, semakin penting level tersebut.</li></ul>
          <h3>Cara Memakainya</h3>
          <p>Strategi umum adalah membeli dekat support, menjual dekat resistance, atau menunggu breakout yang didukung konfirmasi kuat.</p>`
      }
    ]
  },
  {
    id: "bullish-candlesticks",
    icon: "trend",
    title: "Sinyal Bullish",
    subtitle: "Pelajari logika candlestick bullish",
    tag: "Candlestick Bullish",
    intro: "Pahami momentum naik dan sinyal pembalikan arah.",
    hubTitle: "Candlestick Bullish",
    chapters: [
      { title: "Pola Hammer", subtitle: "Pembalikan bullish setelah penurunan", body: `<p>Pola Hammer adalah candlestick bullish reversal yang memberi sinyal potensi pembalikan harga. Pola ini biasanya muncul setelah tren turun dan menunjukkan bahwa pembeli berhasil menahan tekanan jual sebelum candle ditutup.</p><h3>Ciri Utama</h3><ul><li>Badan candle kecil di bagian atas.</li><li>Shadow bawah panjang, biasanya minimal dua kali badan candle.</li><li>Shadow atas kecil atau hampir tidak ada.</li></ul><h3>Mengapa Penting</h3><p>Shadow bawah yang panjang menunjukkan penolakan terhadap harga rendah. Sinyal lebih kuat jika candle berikutnya ditutup di atas high Hammer.</p>` },
      { title: "Morning Star", subtitle: "Pembalikan bullish tiga candle", body: `<p>Morning Star adalah pola pembalikan bullish yang terdiri dari tiga candle. Pola ini sering muncul setelah penurunan dan menunjukkan bahwa momentum bearish mulai melemah.</p><h3>Struktur</h3><ul><li>Candle pertama: candle bearish panjang.</li><li>Candle kedua: candle kecil yang menunjukkan keraguan pasar.</li><li>Candle ketiga: candle bullish kuat yang masuk ke badan candle pertama.</li></ul><p>Pola ini lebih kuat jika didukung volume, pantulan dari support, atau kondisi pasar yang mulai positif.</p>` },
      { title: "Three White Soldiers", subtitle: "Kelanjutan bullish yang kuat", body: `<p>Three White Soldiers adalah pola bullish yang terdiri dari tiga candle bullish berurutan. Setiap candle dibuka di dalam atau dekat badan candle sebelumnya dan ditutup lebih tinggi.</p><h3>Makna</h3><p>Pola ini menunjukkan tekanan beli yang konsisten. Pola ini dapat menandai perubahan dari fase konsolidasi atau bearish menuju kendali pembeli.</p><h3>Konfirmasi</h3><p>Sinyal lebih kuat jika muncul setelah tren turun, dekat support, atau setelah fase akumulasi yang panjang.</p>` },
      { title: "Bullish Engulfing", subtitle: "Candle bullish besar menelan tekanan jual", body: `<p>Bullish Engulfing adalah pola pembalikan dua candle. Candle pertama bearish, lalu candle kedua bullish dengan badan lebih besar yang menelan badan candle pertama.</p><h3>Psikologi Pola</h3><p>Penjual awalnya mengendalikan pasar, tetapi pembeli masuk agresif dan menutup harga di atas open candle sebelumnya. Hal ini menunjukkan perubahan momentum yang kuat.</p><h3>Lokasi</h3><p>Sinyal lebih kuat jika muncul setelah tren turun yang jelas atau di dekat area support penting.</p>` },
      { title: "Bullish Three Line Strike", subtitle: "Kelanjutan tren dengan pullback sementara", body: `<p>Bullish Three Line Strike adalah pola kelanjutan. Pola ini dimulai dari tiga candle bullish berurutan, lalu diikuti candle bearish keempat yang dibuka lebih tinggi dan ditutup di bawah badan candle sebelumnya.</p><p>Walaupun candle keempat terlihat bearish, pola ini sering menunjukkan pullback sementara sebelum tren naik berlanjut.</p><h3>Kontrol Risiko</h3><p>Candle keempat juga bisa menjadi sinyal pembalikan yang nyata. Karena itu, trader perlu menunggu konfirmasi dan mengelola risiko.</p>` },
      { title: "Three Inside Up", subtitle: "Pembalikan bullish yang ringkas", body: `<p>Three Inside Up adalah pola pembalikan bullish yang sering muncul setelah tren turun. Pola ini dimulai dari candle bearish, lalu candle bullish kecil di dalam candle pertama, dan diakhiri candle bullish yang ditutup di atas high candle pertama.</p><h3>Makna</h3><p>Candle pertama menunjukkan kendali penjual. Candle kedua menunjukkan keraguan. Candle ketiga mengonfirmasi bahwa pembeli mulai menguat.</p>` },
      { title: "Dragonfly Doji", subtitle: "Penolakan terhadap harga rendah", body: `<p>Dragonfly Doji adalah candle dengan open, high, dan close yang berdekatan, serta shadow bawah panjang. Pola ini sering menunjukkan bahwa penjual sempat menekan harga turun, tetapi pembeli kembali menguasai harga menjelang penutupan.</p><h3>Penggunaan</h3><p>Pola ini paling berguna jika muncul dekat support setelah penurunan. Trader tetap perlu menunggu konfirmasi dari candle berikutnya.</p>` }
    ]
  },
  {
    id: "bearish-candlesticks",
    icon: "chartDown",
    title: "Sinyal Bearish",
    subtitle: "Mengenali peluang jual di pasar merah",
    tag: "Candlestick Bearish",
    intro: "Pahami pola pembalikan dan kelanjutan bearish.",
    hubTitle: "Candlestick Bearish",
    chapters: [
      { title: "Evening Star", subtitle: "Pembalikan bearish dari momentum bullish", body: `<p>Evening Star adalah pola pembalikan bearish yang muncul setelah tren naik. Pola ini menunjukkan bahwa momentum pembeli mulai melemah dan penjual berpeluang mengambil kendali.</p><h3>Struktur</h3><ul><li>Candle pertama: candle bullish panjang.</li><li>Candle kedua: candle kecil yang menunjukkan keraguan.</li><li>Candle ketiga: candle bearish yang ditutup masuk cukup dalam ke badan candle pertama.</li></ul><p>Pola ini lebih kuat jika muncul dekat resistance atau setelah kenaikan yang panjang.</p>` },
      { title: "Three Black Crows", subtitle: "Rangkaian bearish yang kuat", body: `<p>Three Black Crows adalah pola pembalikan bearish yang terdiri dari tiga candle bearish berurutan. Setiap candle ditutup lebih rendah dan menunjukkan tekanan jual yang konsisten.</p><h3>Makna</h3><p>Pola ini menunjukkan bahwa penjual berulang kali mengambil kendali setiap kali pembeli mencoba menahan harga.</p><h3>Konfirmasi</h3><p>Pola ini lebih kuat jika muncul setelah tren naik yang matang atau dekat resistance utama.</p>` },
      { title: "Hanging Man", subtitle: "Peringatan setelah tren naik", body: `<p>Hanging Man adalah pola bearish yang terbentuk setelah tren naik. Pola ini memiliki badan kecil di bagian atas dan shadow bawah panjang.</p><h3>Interpretasi</h3><p>Walaupun candle dapat ditutup dekat harga pembukaan, shadow bawah yang panjang menunjukkan bahwa penjual sempat menekan harga turun cukup jauh.</p><p>Konfirmasi tetap diperlukan. Candle bearish setelah Hanging Man memperkuat sinyal pembalikan.</p>` },
      { title: "Shooting Star", subtitle: "Penolakan dari shadow atas", body: `<p>Shooting Star adalah candle bearish reversal dengan badan kecil dekat bagian bawah dan shadow atas panjang. Pola ini biasanya muncul setelah tren naik.</p><h3>Makna</h3><p>Pembeli sempat mendorong harga naik, tetapi penjual menolak kenaikan tersebut dan membuat harga ditutup dekat area bawah. Hal ini menunjukkan kendali pembeli mulai melemah.</p>` },
      { title: "Bearish Engulfing", subtitle: "Candle merah besar menekan kendali pembeli", body: `<p>Bearish Engulfing adalah pola pembalikan bearish dua candle. Candle bullish diikuti candle bearish yang lebih besar dan menelan badan candle pertama.</p><h3>Psikologi Pola</h3><p>Pembeli terlihat kuat pada awalnya, tetapi penjual masuk agresif dan menutup harga di bawah open candle sebelumnya. Kondisi ini dapat menandai perubahan sentimen ke arah bearish.</p>` },
      { title: "Bearish Three Line Strike", subtitle: "Kelanjutan tren dengan rebound sementara", body: `<p>Bearish Three Line Strike adalah pola kelanjutan yang muncul saat tren turun. Pola ini dimulai dari tiga candle bearish, lalu candle bullish keempat mengalami rebound sementara ke area badan candle sebelumnya.</p><h3>Makna</h3><p>Rebound dapat menunjukkan aksi ambil untung, tetapi tren bearish yang lebih besar dapat berlanjut jika penjual kembali menguasai pasar.</p>` },
      { title: "Three Inside Down", subtitle: "Konfirmasi pembalikan bearish", body: `<p>Three Inside Down adalah pola pembalikan bearish yang muncul setelah tren naik. Pola ini dimulai dari candle bullish, diikuti candle bearish kecil di dalam candle pertama, lalu diakhiri candle bearish yang ditutup di bawah low candle pertama.</p><h3>Psikologi Pola</h3><p>Optimisme awal mulai melemah, keraguan muncul, dan candle ketiga mengonfirmasi bahwa penjual mengambil kendali.</p>` }
    ]
  },
  {
    id: "technical-indicators",
    icon: "chart",
    title: "Indikator Teknikal",
    subtitle: "Penjelasan sederhana tentang RSI, MACD, dan moving average",
    tag: "Indikator Teknikal",
    intro: "Gunakan indikator sebagai alat bantu, bukan sebagai kepastian.",
    hubTitle: "Indikator Teknikal",
    chapters: [
      { title: "Moving Average", subtitle: "Meratakan noise pasar", body: `<p>Moving average adalah salah satu alat paling populer dalam analisis teknikal. Alat ini meratakan data harga sehingga arah pasar lebih mudah dibaca.</p><h3>SMA</h3><p>Simple Moving Average dihitung dengan menjumlahkan harga penutupan dalam periode tertentu, lalu membaginya dengan jumlah periode.</p><h3>EMA</h3><p>Exponential Moving Average memberi bobot lebih besar pada harga terbaru sehingga lebih cepat merespons perubahan harga.</p><h3>Cara Trader Memakainya</h3><ul><li>Mengenali arah tren.</li><li>Mengamati support dan resistance di sekitar moving average.</li><li>Melihat persilangan antara rata-rata pendek dan panjang.</li></ul>` },
      { title: "On-Balance Volume (OBV)", subtitle: "Indikator tekanan volume", body: `<p>On-Balance Volume atau OBV adalah indikator yang memakai aliran volume untuk memperkirakan tekanan beli dan jual. Jika harga naik dengan volume kuat, OBV meningkat. Jika harga turun dengan volume kuat, OBV menurun.</p><h3>Interpretasi</h3><p>OBV yang naik dapat mendukung pandangan bullish. OBV yang turun dapat mendukung pandangan bearish. Perbedaan arah antara OBV dan harga dapat memberi peringatan bahwa momentum melemah.</p>` },
      { title: "Relative Strength Index (RSI)", subtitle: "Momentum serta area overbought dan oversold", body: `<p>RSI adalah oscillator momentum yang mengukur kecepatan dan besar perubahan harga terbaru. Nilainya biasanya bergerak dari 0 sampai 100.</p><ul><li>Di atas 70 sering dibaca sebagai overbought.</li><li>Di bawah 30 sering dibaca sebagai oversold.</li><li>Divergence dapat memberi peringatan bahwa momentum melemah.</li></ul><p>RSI perlu digabungkan dengan konteks tren karena tren kuat dapat bertahan lama di area overbought atau oversold.</p>` },
      { title: "Stochastic Oscillator", subtitle: "Posisi harga dalam rentang terbaru", body: `<p>Stochastic Oscillator membandingkan harga penutupan dengan rentang high-low terbaru. Indikator ini membantu membaca apakah harga ditutup dekat bagian atas atau bawah rentang tersebut.</p><p>Angka di atas 80 dapat menunjukkan kondisi overbought. Angka di bawah 20 dapat menunjukkan kondisi oversold. Konfirmasi tetap diperlukan.</p>` },
      { title: "Bollinger Bands", subtitle: "Batas volatilitas harga", body: `<p>Bollinger Bands terdiri dari moving average dan dua garis batas di atas serta di bawahnya. Garis melebar saat volatilitas naik dan menyempit saat volatilitas turun.</p><h3>Penggunaan Umum</h3><ul><li>Mengenali pelebaran volatilitas.</li><li>Melihat kemungkinan mean reversion.</li><li>Mengamati breakout setelah garis menyempit.</li></ul>` },
      { title: "MACD", subtitle: "Sinyal tren dan momentum", body: `<p>MACD adalah singkatan dari Moving Average Convergence Divergence. Indikator ini membandingkan dua exponential moving average dan memakai garis sinyal.</p><h3>Interpretasi</h3><ul><li>MACD yang menembus ke atas garis sinyal dapat menjadi sinyal bullish.</li><li>MACD yang menembus ke bawah garis sinyal dapat menjadi sinyal bearish.</li><li>Histogram yang melebar dapat menunjukkan momentum menguat.</li></ul>` },
      { title: "Fibonacci Retracement", subtitle: "Area pullback potensial", body: `<p>Fibonacci retracement dipakai untuk memperkirakan support dan resistance saat harga mengalami pullback. Level umum meliputi 23,6%, 38,2%, 50%, 61,8%, dan 78,6%.</p><p>Level ini bukan angka ajaib. Nilainya muncul karena banyak trader memperhatikannya dan menggabungkannya dengan struktur harga, tren, serta volume.</p>` }
    ]
  },
  {
    id: "fundamental-analysis",
    icon: "calendar",
    title: "Analisis Fundamental",
    subtitle: "Berita, laporan keuangan, dan faktor makro global",
    tag: "Analisis Fundamental",
    intro: "Pahami nilai di balik pergerakan harga.",
    hubTitle: "Analisis Fundamental",
    chapters: [
      { title: "Dasar Analisis Fundamental", subtitle: "Melihat nilai sebenarnya", body: `<p>Analisis fundamental menilai nilai intrinsik aset dengan melihat faktor ekonomi, keuangan, dan kualitas bisnis. Pada saham, analisis ini mempelajari laba perusahaan, kualitas manajemen, posisi industri, dan prospek pertumbuhan.</p><h3>Faktor Ekonomi</h3><p>Suku bunga, inflasi, tenaga kerja, pergerakan mata uang, dan belanja konsumen dapat memengaruhi nilai pasar.</p><h3>Faktor Perusahaan</h3><p>Pendapatan, margin laba, utang, arus kas, dan keunggulan bersaing membantu investor menilai kualitas bisnis.</p>` },
      { title: "Laporan Keuangan", subtitle: "Membaca kesehatan bisnis", body: `<p>Laporan keuangan memberi informasi tentang kinerja dan posisi perusahaan. Tiga laporan utama adalah laporan laba rugi, neraca, dan laporan arus kas.</p><h3>Laporan Laba Rugi</h3><p>Menunjukkan pendapatan, beban, dan laba dalam satu periode.</p><h3>Neraca</h3><p>Menunjukkan aset, liabilitas, dan ekuitas pada satu titik waktu.</p><h3>Laporan Arus Kas</h3><p>Menunjukkan pergerakan kas dari aktivitas operasi, investasi, dan pendanaan.</p>` },
      { title: "Fundamental Perusahaan", subtitle: "Laba, margin, utang, dan pertumbuhan", body: `<p>Fundamental perusahaan membantu investor memahami apakah perusahaan sehat, terlalu murah, atau terlalu mahal.</p><ul><li><strong>Laba:</strong> keuntungan yang dihasilkan perusahaan.</li><li><strong>Margin:</strong> tingkat keuntungan setelah biaya.</li><li><strong>Utang:</strong> kewajiban keuangan yang dapat meningkatkan risiko.</li><li><strong>Pertumbuhan:</strong> peningkatan penjualan, laba, atau pangsa pasar.</li></ul>` },
      { title: "Analisis Industri", subtitle: "Konteks bisnis perlu dipahami", body: `<p>Analisis industri memeriksa lingkungan yang lebih luas di sekitar perusahaan. Perusahaan kuat di industri yang melemah tetap dapat tertekan, sedangkan perusahaan biasa di industri yang tumbuh dapat memperoleh keuntungan dari tren positif.</p><h3>Faktor yang Ditinjau</h3><ul><li>Ukuran pasar dan tingkat pertumbuhan.</li><li>Persaingan dan hambatan masuk.</li><li>Regulasi dan perubahan teknologi.</li><li>Rantai pasok dan perilaku pelanggan.</li></ul>` },
      { title: "Teknik Valuasi", subtitle: "Memperkirakan nilai wajar", body: `<p>Teknik valuasi membantu investor memperkirakan nilai suatu aset. Teknik ini bukan jawaban pasti, tetapi cara terstruktur untuk membandingkan harga dan nilai.</p><h3>Metode Umum</h3><ul><li>Discounted Cash Flow, yaitu memperkirakan arus kas masa depan dan mendiskontokannya ke nilai saat ini.</li><li>Comparable Company Analysis, yaitu membandingkan rasio valuasi dengan perusahaan sejenis.</li><li>Price-to-Earnings dan Price-to-Book, yaitu membandingkan harga pasar dengan ukuran akuntansi.</li></ul>` },
      { title: "Prinsip Akuntansi", subtitle: "Aturan di balik angka", body: `<p>Prinsip akuntansi mengatur cara perusahaan mencatat transaksi dan melaporkan kinerja. Pemahaman prinsip ini membantu investor membaca laporan keuangan dengan lebih hati-hati.</p><h3>Konsep Penting</h3><ul><li>Pengakuan pendapatan.</li><li>Prinsip pencocokan biaya dan pendapatan.</li><li>Depresiasi dan amortisasi.</li><li>Akuntansi akrual.</li></ul>` },
      { title: "Analisis Pasar", subtitle: "Menggabungkan struktur pasar dan fundamental", body: `<p>Analisis pasar melihat hal yang lebih luas dari satu perusahaan. Analisis ini menilai kinerja sektor, kondisi makroekonomi, sentimen investor, likuiditas, dan selera risiko.</p><p>Investor yang baik menggabungkan konteks teknikal dan fundamental. Analisis teknikal membantu menentukan waktu, sedangkan analisis fundamental membantu membangun keyakinan jangka panjang.</p>` }
    ]
  }
]
};

const QUIZ_QUESTIONS_BY_LANG = {
  en: [
  { q: "What does technical analysis mainly study?", a: ["Past price and volume", "Company office size", "CEO biography only", "Tax documents only"], correct: 0 },
  { q: "A support level is best described as...", a: ["A price ceiling", "A level where buying pressure may appear", "A guaranteed profit line", "A broker fee"], correct: 1 },
  { q: "An uptrend often forms a sequence of...", a: ["Lower highs and lower lows", "Flat highs only", "Higher highs and higher lows", "Random candles only"], correct: 2 },
  { q: "Which candle component shows the highest traded price?", a: ["Open", "Close", "Low", "High"], correct: 3 },
  { q: "RSI is mainly used to measure...", a: ["Momentum", "Company debt", "Dividend tax", "Order form design"], correct: 0 },
  { q: "A Hammer pattern is usually interpreted as...", a: ["A possible bullish reversal", "A fixed loss", "A balance sheet", "A trading fee"], correct: 0 },
  { q: "Which statement is the most careful?", a: ["Technical analysis predicts the future perfectly", "Indicators remove all risk", "Patterns need confirmation and risk management", "Charts always beat news"], correct: 2 },
  { q: "Fundamental analysis focuses more on...", a: ["The value and quality behind an asset", "Only candle colors", "Only emojis", "Only login pages"], correct: 0 },
  { q: "A bearish engulfing pattern means...", a: ["A larger bearish candle absorbs a previous bullish body", "A bullish candle always wins", "Price cannot fall", "Volume disappears"], correct: 0 },
  { q: "Multi-time-frame analysis means...", a: ["Opening many broker accounts", "Looking at several time frames for context", "Using no chart", "Ignoring the trend"], correct: 1 }
],
  id: [
  { q: "Apa yang terutama dipelajari dalam analisis teknikal?", a: ["Harga dan volume masa lalu", "Ukuran kantor perusahaan", "Biografi CEO saja", "Dokumen pajak saja"], correct: 0 },
  { q: "Support paling tepat dijelaskan sebagai...", a: ["Batas atas harga", "Area ketika tekanan beli dapat muncul", "Garis profit yang pasti", "Biaya broker"], correct: 1 },
  { q: "Tren naik sering membentuk rangkaian...", a: ["Lower high dan lower low", "High yang datar saja", "Higher high dan higher low", "Candle acak saja"], correct: 2 },
  { q: "Komponen candle mana yang menunjukkan harga tertinggi?", a: ["Open", "Close", "Low", "High"], correct: 3 },
  { q: "RSI terutama dipakai untuk mengukur...", a: ["Momentum", "Utang perusahaan", "Pajak dividen", "Desain formulir order"], correct: 0 },
  { q: "Pola Hammer biasanya dibaca sebagai...", a: ["Kemungkinan pembalikan bullish", "Kerugian tetap", "Neraca keuangan", "Biaya trading"], correct: 0 },
  { q: "Pernyataan mana yang paling hati-hati?", a: ["Analisis teknikal memprediksi masa depan dengan sempurna", "Indikator menghapus semua risiko", "Pola perlu konfirmasi dan manajemen risiko", "Grafik selalu mengalahkan berita"], correct: 2 },
  { q: "Analisis fundamental lebih fokus pada...", a: ["Nilai dan kualitas di balik aset", "Warna candle saja", "Emoji saja", "Halaman login saja"], correct: 0 },
  { q: "Pola bearish engulfing berarti...", a: ["Candle bearish besar menelan badan candle bullish sebelumnya", "Candle bullish selalu menang", "Harga tidak bisa turun", "Volume menghilang"], correct: 0 },
  { q: "Analisis multi-time frame berarti...", a: ["Membuka banyak akun broker", "Melihat beberapa time frame untuk konteks", "Tidak memakai grafik", "Mengabaikan tren"], correct: 1 }
]
};

function getUsers() {
  return JSON.parse(localStorage.getItem(STORAGE_USERS) || "{}");
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

function getSessionEmail() {
  return localStorage.getItem(STORAGE_SESSION);
}

function setSessionEmail(email) {
  localStorage.setItem(STORAGE_SESSION, email);
}

function clearSession() {
  localStorage.removeItem(STORAGE_SESSION);
}

function createRandomName() {
  const number = Math.floor(1000000000 + Math.random() * 8999999999);
  return `user@${number}`;
}

function getLang() {
  const savedLanguage = localStorage.getItem(STORAGE_LANGUAGE);

  if (savedLanguage === "id" || savedLanguage === "en") {
    return savedLanguage;
  }

  const user = currentUser();

  if (user?.lang === "id" || user?.lang === "en") {
    return user.lang;
  }

  return "en";
}

function t(key, replacements = {}) {
  const lang = getLang();
  const dictionary = i18n[lang] || i18n.en;
  let text = dictionary[key] || i18n.en[key] || key;
  Object.entries(replacements).forEach(([name, value]) => {
    text = text.replaceAll(`{${name}}`, value);
  });
  return text;
}

function getCourses() {
  return COURSES_BY_LANG[getLang()] || COURSES_BY_LANG.en;
}

function getQuizQuestions() {
  return QUIZ_QUESTIONS_BY_LANG[getLang()] || QUIZ_QUESTIONS_BY_LANG.en;
}

function setDocumentLanguage() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.title = t("documentTitle");
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function yesterdayKey() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return todayKey(d);
}

function buildNewUser({ fullName, email, password }) {
  return {
    fullName: fullName || createRandomName(),
    displayName: createRandomName(),
    email,
    password,
    balance: DEFAULT_BALANCE,
    streak: 0,
    lastLearningDate: null,
    completedLessons: [],
    completedQuizzes: [],
    achievements: [],
    reminder: { enabled: false, time: "09:00", lastNotified: null },
    lang: getLang(),
    createdAt: new Date().toISOString()
  };
}

function currentUser() {
  const email = getSessionEmail();
  const users = getUsers();
  return email ? users[email] : null;
}

function updateCurrentUser(mutator) {
  const email = getSessionEmail();
  const users = getUsers();
  if (!email || !users[email]) return null;
  mutator(users[email]);
  saveUsers(users);
  return users[email];
}


function routeTo(path) {
  window.location.hash = path;
}

function getRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  return hash || (currentUser() ? "/learn" : "/login");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function courseById(id) {
  return getCourses().find(course => course.id === id);
}

function totalLessonCount() {
  return getCourses().reduce((sum, course) => sum + course.chapters.length, 0);
}

function userProgress(user) {
  const lessonPart = user.completedLessons.length;
  const quizPart = user.completedQuizzes.includes("main-quiz") ? 1 : 0;
  const total = totalLessonCount() + 1;
  return Math.min(100, Math.round(((lessonPart + quizPart) / total) * 100));
}

function markLearningActivity() {
  updateCurrentUser(user => {
    const today = todayKey();
    if (user.lastLearningDate === today) return;
    if (user.lastLearningDate === yesterdayKey()) user.streak += 1;
    else user.streak = 1;
    user.lastLearningDate = today;
  });
}

function unlockAchievements(user) {
  const progress = userProgress(user);
  const add = key => {
    if (!user.achievements.includes(key)) user.achievements.push(key);
  };
  if (user.completedLessons.length >= 1) add("first-read");
  if (user.streak >= 3) add("streak-3");
  if (user.completedQuizzes.includes("main-quiz")) add("quiz-clear");
  if (progress >= 100) add("complete-100");
}

function updateAchievements() {
  updateCurrentUser(user => unlockAchievements(user));
}

function shell(content, { noNav = false, active = "learn" } = {}) {
  const user = currentUser();
  return `
    <main class="phone-shell">
      <section class="screen ${noNav ? "no-nav" : ""}">
        ${content}
      </section>
      ${noNav || !user ? "" : bottomNav(active)}
    </main>`;
}

function brandRow(user) {
  return `
    <header class="brand-row">
      <div class="brand-left">
        <div class="avatar" aria-hidden="true">${brandAvatar()}</div>
        <div>
          <div class="brand-name">${escapeHtml(user.displayName || "Tradelab.id")}</div>
          <div class="streak-small">${icon("flame", "inline-icon")} ${user.streak} ${t("daysStreak")}</div>
        </div>
      </div>
      <div class="balance-pill">$${Number(user.balance).toLocaleString("id-ID", { minimumFractionDigits: 2 })}</div>
    </header>`;
}

function backBar(label = "Tradelab.id") {
  return `
    <header class="back-bar">
      <button class="back-btn" data-back="true">‹ ${t("back")}</button>
      <div class="logo-text">${label}</div>
    </header>`;
}

function bottomNav(active) {
  const items = [
    ["learn", "book", t("learn"), "/learn"],
    ["games", "game", t("games"), "/games"],
    ["practice", "trend", t("practice"), "/practice"],
    ["profile", "profile", t("profile"), "/profile"],
    ["settings", "settings", t("settings"), "/settings"]
  ];
  return `<nav class="bottom-nav">${items.map(([id, iconName, label, route]) => `
    <button class="nav-btn ${active === id ? "active" : ""}" data-route="${route}">
      ${icon(iconName, "nav-icon")}<span>${label}</span>
    </button>`).join("")}</nav>`;
}

function renderLogin(message = "") {
  app.innerHTML = `
    <main class="phone-shell">
      <section class="auth-screen no-nav">
        <div class="auth-card">
          <div class="logo-text" style="margin-bottom:34px">Tradelab.id</div>
          <h1 class="auth-title">${t("startJourneyTitle")}</h1>
          <p class="auth-subtitle">${t("startJourneySubtitle")}</p>
          <form class="auth-panel" id="loginForm">
            <div class="field-group">
              <label class="field-label" for="loginEmail">${t("email")}</label>
              <div class="input-with-icon">
                <span class="input-icon">${icon("mail")}</span>
                <input class="form-input" id="loginEmail" type="email" placeholder="name@firm.com" required />
              </div>
            </div>
            <div class="field-group">
              <div class="field-line">
                <label class="field-label" for="loginPassword">${t("passwordSimple")}</label>
                <button class="link-button" type="button" data-action="forgot">${t("forgotPassword")}</button>
              </div>
              <div class="input-with-icon">
                <span class="input-icon">${icon("lock")}</span>
                <input class="form-input" id="loginPassword" type="password" placeholder="••••••••••" required />
                <button class="eye-button" type="button" data-toggle-password="loginPassword">${icon("eye")}</button>
              </div>
            </div>
            <button class="primary-btn" type="submit">${t("signInDashboard")}</button>
            ${message ? `<div class="notice">${message}</div>` : ""}
            <div class="divider">${t("quickSignIn")}</div>
            <div class="social-grid">
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("google")}Google</button>
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("apple")}Apple</button>
            </div>
          </form>
          <div class="auth-footer">${t("noAccount")} <button data-route="/signup">${t("signUp")}</button></div>
        </div>
      </section>
    </main>`;
}

function renderSignup(message = "") {
  app.innerHTML = `
    <main class="phone-shell">
      <section class="auth-screen no-nav">
        <div class="auth-card">
          <h1 class="auth-title">${t("createAccountTitle")}</h1>
          <p class="auth-subtitle">${t("createAccountSubtitle")}</p>
          <form id="signupForm">
            <div class="field-group">
              <label class="field-label" for="signupName">${t("fullName")}</label>
              <input class="form-input" id="signupName" type="text" placeholder="${t("fullNamePlaceholder")}" />
            </div>
            <div class="field-group">
              <label class="field-label" for="signupEmail">${t("institutionalEmail")}</label>
              <input class="form-input" id="signupEmail" type="email" placeholder="name@firm.com" required />
            </div>
            <div class="field-group">
              <label class="field-label" for="signupPassword">${t("password")}</label>
              <div class="input-with-icon">
                <input class="form-input" id="signupPassword" type="password" placeholder="••••••••••" required minlength="6" />
                <button class="eye-button" type="button" data-toggle-password="signupPassword">${icon("eye")}</button>
              </div>
            </div>
            <button class="primary-btn large-glow" type="submit">${t("createAccount")}</button>
            ${message ? `<div class="notice">${message}</div>` : ""}
            <div class="divider">${t("orRegisterWith")}</div>
            <div class="social-grid">
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("google")}Google</button>
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("apple")}Apple</button>
            </div>
            <div class="auth-footer">${t("alreadyHaveAccount")} <button data-route="/login">${t("signIn")}</button></div>
          </form>
        </div>
      </section>
    </main>`;
}

function renderLearn() {
  const user = currentUser();
  const courses = getCourses();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <section class="hero-card">
      <span class="pill red">${t("heroPill")}</span>
      <h1 class="hero-title">${t("heroTitle")}</h1>
      <p class="hero-copy">${t("heroCopy")}</p>
      <button class="primary-btn" data-route="/course/trading-basics">${t("startLearning")}</button>
    </section>
    <div class="section-head">
      <h2 class="section-title">${t("knowledgeHub")}</h2>
      <button class="view-link" data-route="/course/trading-basics">${t("viewAll")}</button>
    </div>
    <div class="course-grid">
      ${courses.slice(1, 3).map(course => courseCard(course)).join("")}
      ${courses.slice(3).map(course => courseCard(course, true)).join("")}
    </div>
    <article class="tip-card">
      <div class="course-icon">${icon("light")}</div>
      <div><h3>${t("dailyTipTitle")}</h3><p>${t("dailyTipText")}</p></div>
    </article>
  `, { active: "learn" });
}

function courseCard(course, wide = false) {
  return `
    <button class="course-card ${wide ? "wide" : ""}" data-route="/course/${course.id}">
      <div class="course-icon">${icon(course.icon)}</div>
      <h3>${course.title}</h3>
      <p>${course.subtitle}</p>
      ${wide ? "" : `<div class="course-thumb" aria-hidden="true"></div>`}
    </button>`;
}

function renderCourse(courseId) {
  const course = courseById(courseId) || getCourses()[0];
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">${course.hubTitle || course.title}</h1>
    <p class="page-subtitle">${course.subtitle}</p>
    <div class="chapter-list">
      ${course.chapters.map((chapter, index) => `
        <button class="chapter-btn" data-route="/lesson/${course.id}/${index}">
          ${t("chapterShort")} ${index + 1} : ${chapter.title}
          <span class="chapter-meta">${chapter.subtitle}</span>
        </button>`).join("")}
    </div>
  `, { noNav: true });
}

function renderLesson(courseId, chapterIndex) {
  const course = courseById(courseId) || getCourses()[0];
  const chapter = course.chapters[Number(chapterIndex)] || course.chapters[0];
  const key = `${course.id}:${chapterIndex}`;
  const user = currentUser();
  const done = user.completedLessons.includes(key);
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">${t("chapter")} ${Number(chapterIndex) + 1}</h1>
    <p class="page-subtitle">${chapter.title}</p>
    <article class="lesson-card">
      ${chapter.body}
      ${chapter.diagram === "candlestick" ? candlestickDiagram() : ""}
      <div class="lesson-actions">
        <button class="primary-btn" data-action="complete-lesson" data-key="${key}">${done ? t("completed") : t("markRead")}</button>
        <button class="secondary-btn" data-route="/course/${course.id}">${t("back")}</button>
      </div>
    </article>
  `, { noNav: true });
}

function candlestickDiagram() {
  return `
    <div class="candle-diagram" aria-label="${t("candlestickAria")}">
      <div class="candle green"><div class="candle-body"></div><span class="candle-label top">${t("upperWick")}</span><span class="candle-label mid">${t("close")}</span><span class="candle-label low">${t("open")}</span><span class="candle-label bottom">${t("lowerWick")}</span></div>
      <div class="candle red"><div class="candle-body"></div><span class="candle-label top">${t("upperWick")}</span><span class="candle-label mid">${t("open")}</span><span class="candle-label low">${t("close")}</span><span class="candle-label bottom">${t("lowerWick")}</span></div>
    </div>`;
}

function renderGames() {
  const user = currentUser();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <section class="hero-card green-hero">
      <span class="pill">${t("dailyChallenge")}</span>
      <h1 class="hero-title">${t("patternHunterChallenge")}</h1>
      <p class="hero-copy">${t("patternHunterCopy")}</p>
      <button class="primary-btn" data-route="/quiz">${t("startChallenge")}</button>
    </section>
    <div class="section-head">
      <h2 class="section-title">${t("arcadeFloor")}</h2>
      <button class="icon-round-btn secondary-btn" data-route="/quiz">${icon("menu")}</button>
    </div>
    <div class="game-list">
      <button class="game-card" data-route="/quiz"><div class="game-icon">${icon("trend")}</div><h3>${t("patternHunter")}</h3><p>${t("patternHunterDesc")}</p><div class="score-label">${t("bestScore")}</div><div class="score-value">24,450 XP</div></button>
      <button class="game-card image-card" data-route="/quiz"><h3>${t("quizMaster")}</h3><p>${t("quizMasterDesc")}</p><div class="score-label">${t("rank")}</div><div class="score-value" style="color:#ffb4b4">${t("globalTop")}</div></button>
      <button class="game-card" data-route="/quiz"><div class="game-icon">${icon("news")}</div><h3>${t("newsReaction")}</h3><p>${t("newsReactionDesc")}</p><div class="score-label">${t("bestScore")}</div><div class="score-value">18,200 XP</div></button>
    </div>
  `, { active: "games" });
}

function renderQuiz() {
  const quizQuestions = getQuizQuestions();
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">${t("quizMaster")}</h1>
    <p class="page-subtitle">${t("quizSubtitle")}</p>
    <form id="quizForm">
      ${quizQuestions.map((item, index) => `
        <article class="quiz-card">
          <p class="quiz-question">${index + 1}. ${item.q}</p>
          <div class="answer-grid">
            ${item.a.map((answer, optionIndex) => `
              <label class="answer-option"><input type="radio" name="q${index}" value="${optionIndex}" required /> <span>${String.fromCharCode(65 + optionIndex)}. ${answer}</span></label>`).join("")}
          </div>
        </article>`).join("")}
      <button class="primary-btn" type="submit">${t("submitQuiz")}</button>
    </form>
  `, { noNav: true });
}

function renderProfile() {
  updateAchievements();
  const user = currentUser();
  const progress = userProgress(user);
  const level = progress >= 75 ? t("advanced") : progress >= 35 ? t("intermediate") : t("beginner");
  app.innerHTML = shell(`
    ${brandRow(user)}
    <div class="progress-wrap">
      <div class="progress-ring" style="--progress:${progress}%">
        <div class="progress-inner"><span class="progress-number">${progress}%</span><span class="progress-label">${t("completion")}</span><div class="level-pill">${level}<br/>${t("level")}</div></div>
      </div>
    </div>
    <h1 class="page-title" style="font-size:38px;text-align:center">${t("knowledgeJourney")}</h1>
    <p class="page-subtitle" style="text-align:center">${t("knowledgeJourneyCopy")}</p>
    <section class="profile-name-box">
      <label class="field-label" for="displayNameInput">${t("editName")}</label>
      <div class="btn-row" style="margin-top:12px">
        <input class="form-input" id="displayNameInput" value="${escapeHtml(user.displayName)}" />
        <button class="dark-btn" data-action="save-name">${t("saveName")}</button>
      </div>
    </section>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon">${icon("book")}</div><span class="stat-number">${user.completedLessons.length}</span><span class="stat-label">${t("lessonsLearned")}</span></div>
      <div class="stat-card"><div class="stat-icon">${icon("medal")}</div><span class="stat-number">${user.completedQuizzes.length}</span><span class="stat-label">${t("testsPassed")}</span></div>
      <div class="stat-card"><div class="stat-icon">${icon("flame")}</div><span class="stat-number">${user.streak} ${user.streak === 1 ? t("day") : t("days")}</span><span class="stat-label">${t("currentStreak")}</span></div>
      <div class="stat-card" style="background:linear-gradient(140deg,#113f2b,#0e452f)"><div class="stat-icon">${icon("wallet")}</div><span class="stat-number" style="color:var(--green)">$1,240</span><span class="stat-label">${t("simulatedProfit")}</span></div>
    </div>
    <article class="content-card" style="margin-top:28px;padding:24px;border-radius:24px">
      <div class="section-head" style="margin:0 0 12px"><h2 class="section-title">${t("recentBadges")}</h2><button class="view-link">${t("viewAll")}</button></div>
      <div class="badge-row">
        ${["first-read", "streak-3", "quiz-clear", "complete-100"].map((badge, index) => `<div class="badge ${user.achievements.includes(badge) ? "active" : ""}">${icon(["medal","flame","chart","trophy"][index])}</div>`).join("")}
      </div>
    </article>
  `, { active: "profile" });
}

function renderSettings() {
  const user = currentUser();
  const activeLanguage = getLang();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <h1 class="page-title">${t("settings")}</h1>
    <p class="page-subtitle">${t("settingsSubtitle")}</p>
    <div class="settings-list">
      <button class="setting-card" data-route="/practice"><div class="setting-icon">${icon("trend")}</div><div><h3>${t("simulator")}</h3><p>${t("simulatorSettings")}</p></div><span class="chevron">›</span></button>
      <article class="setting-card">
        <div class="setting-icon">${icon("bell")}</div><div><h3>${t("learningReminders")}</h3><p>${t("reminderText")} ${t("at")} ${user.reminder.time}</p></div><button class="toggle ${user.reminder.enabled ? "active" : ""}" data-action="toggle-reminder" aria-label="${t("toggleReminder")}"></button>
        <div class="settings-subpanel">
          <input class="time-input" type="time" id="reminderTime" value="${user.reminder.time}" />
          <button class="secondary-btn" data-action="save-reminder-time">${t("saveReminderTime")}</button>
        </div>
      </article>
      <article class="setting-card">
        <div class="setting-icon">${icon("language")}</div><div><h3>${t("language")}</h3><p>${t("languageDesc")}</p></div><span></span>
        <div class="settings-subpanel">
          <select class="form-select" id="languageSelect"><option value="en" ${activeLanguage === "en" ? "selected" : ""}>English (US)</option><option value="id" ${activeLanguage === "id" ? "selected" : ""}>Bahasa Indonesia</option></select>
        </div>
      </article>
      <button class="setting-card" data-action="feedback"><div class="setting-icon">${icon("feedback")}</div><div><h3>${t("feedback")}</h3><p>${t("feedbackDesc")}</p></div><span class="chevron">›</span></button>
    </div>
    <button class="signout-btn" data-action="logout">${t("signOut")}</button>
    <p class="version-text">${t("versionText")}</p>
  `, { active: "settings" });
}

function renderPractice() {
  const user = currentUser();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <h1 class="page-title">${t("practice")}</h1>
    <p class="page-subtitle">${t("practiceSubtitle")}</p>
    <section class="hero-card green-hero practice-demo-card">
      <span class="pill">${t("externalDemo")}</span>
      <h2 class="hero-title">${t("marketReplayLab")}</h2>
      <p class="hero-copy">${t("practiceDemoCopy")}</p>
      <div class="practice-actions">
        <a class="primary-btn external-demo-link" href="${PRACTICE_DEMO_URL}" target="_blank" rel="noopener noreferrer">${t("openDemoWebsite")}</a>
        <button class="secondary-btn" data-route="/quiz">${t("openPracticeQuiz")}</button>
      </div>
    </section>
    <div class="desktop-wide-grid">
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>${t("trendReading")}</h3><p class="page-subtitle">${t("trendReadingCopy")}</p></article>
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>${t("riskSetup")}</h3><p class="page-subtitle">${t("riskSetupCopy")}</p></article>
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>${t("journal")}</h3><p class="page-subtitle">${t("journalCopy")}</p></article>
    </div>
  `, { active: "practice" });
}

function ensureAuth() {
  if (!currentUser()) {
    routeTo("/login");
    return false;
  }
  return true;
}

function render() {
  setDocumentLanguage();
  const route = getRoute();
  if (route === "/login") return renderLogin();
  if (route === "/signup") return renderSignup();
  if (!ensureAuth()) return;

  const parts = route.split("/").filter(Boolean);
  if (route === "/learn") return renderLearn();
  if (route === "/games") return renderGames();
  if (route === "/profile") return renderProfile();
  if (route === "/settings") return renderSettings();
  if (route === "/practice") return renderPractice();
  if (route === "/quiz") return renderQuiz();
  if (parts[0] === "course") return renderCourse(parts[1]);
  if (parts[0] === "lesson") return renderLesson(parts[1], parts[2]);
  return renderLearn();
}

function registerUser(event) {
  event.preventDefault();
  const fullName = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const password = document.getElementById("signupPassword").value;
  const users = getUsers();
  if (users[email]) return renderSignup(t("emailExists"));
  users[email] = buildNewUser({ fullName, email, password });
  saveUsers(users);
  setSessionEmail(email);
  routeTo("/learn");
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const users = getUsers();
  if (!users[email] || users[email].password !== password) return renderLogin(t("loginWrong"));
  setSessionEmail(email);
  routeTo("/learn");
}

function demoAuth() {
  const email = "demo@tradelab.id";
  const users = getUsers();
  if (!users[email]) users[email] = buildNewUser({ fullName: t("demoUser"), email, password: "demo123" });
  saveUsers(users);
  setSessionEmail(email);
  routeTo("/learn");
}

function togglePassword(id) {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === "password" ? "text" : "password";
}

function completeLesson(key) {
  updateCurrentUser(user => {
    if (!user.completedLessons.includes(key)) user.completedLessons.push(key);
    unlockAchievements(user);
  });
  markLearningActivity();
  render();
}

function saveName() {
  const input = document.getElementById("displayNameInput");
  const nextName = input.value.trim();
  if (!nextName) return;
  updateCurrentUser(user => { user.displayName = nextName; });
  renderProfile();
}

function saveLanguage() {
  const select = document.getElementById("languageSelect");
  const value = select?.value === "id" ? "id" : "en";

  localStorage.setItem(STORAGE_LANGUAGE, value);

  updateCurrentUser(user => {
    user.lang = value;
  });

  render();
}

async function toggleReminder() {
  const user = currentUser();
  if (!user.reminder.enabled && "Notification" in window && Notification.permission === "default") {
    await Notification.requestPermission();
  }
  updateCurrentUser(item => { item.reminder.enabled = !item.reminder.enabled; });
  renderSettings();
}

function saveReminderTime() {
  const value = document.getElementById("reminderTime")?.value || "09:00";
  updateCurrentUser(user => { user.reminder.time = value; user.reminder.lastNotified = null; });
  renderSettings();
}

function checkReminder() {
  const user = currentUser();
  if (!user || !user.reminder.enabled) return;
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5);
  const currentDate = todayKey(now);
  if (currentTime !== user.reminder.time || user.reminder.lastNotified === currentDate) return;
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(t("notificationTitle"), { body: t("notificationBody") });
  } else {
    alert(t("notificationAlert"));
  }
  updateCurrentUser(item => { item.reminder.lastNotified = currentDate; });
}

function submitQuiz(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const quizQuestions = getQuizQuestions();
  let score = 0;
  quizQuestions.forEach((item, index) => {
    if (Number(form.get(`q${index}`)) === item.correct) score += 1;
  });
  updateCurrentUser(user => {
    if (!user.completedQuizzes.includes("main-quiz")) user.completedQuizzes.push("main-quiz");
    user.balance += score * 25;
    unlockAchievements(user);
  });
  markLearningActivity();
  event.currentTarget.innerHTML = `
    <div class="quiz-result"><strong>${t("scoreLabel", { score, total: quizQuestions.length })}</strong><br/>${t("quizCompleted")}</div>
    <button class="primary-btn" type="button" data-route="/profile">${t("viewProfileProgress")}</button>
    <button class="secondary-btn" type="button" data-route="/games" style="margin-top:12px;width:100%">${t("backToGames")}</button>`;
}

function handleClick(event) {
  const routeBtn = event.target.closest("[data-route]");
  if (routeBtn) routeTo(routeBtn.dataset.route);

  const backBtn = event.target.closest("[data-back]");
  if (backBtn) history.back();

  const passwordBtn = event.target.closest("[data-toggle-password]");
  if (passwordBtn) togglePassword(passwordBtn.dataset.togglePassword);

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  if (action === "demo-auth") demoAuth();
  if (action === "forgot") alert(t("forgotPlaceholder"));
  if (action === "complete-lesson") completeLesson(event.target.closest("[data-key]").dataset.key);
  if (action === "save-name") saveName();
  if (action === "toggle-reminder") toggleReminder();
  if (action === "save-reminder-time") saveReminderTime();
  if (action === "feedback") alert(t("feedbackPlaceholder"));
  if (action === "logout") { clearSession(); routeTo("/login"); }
}

function handleSubmit(event) {
  if (event.target.id === "signupForm") registerUser(event);
  if (event.target.id === "loginForm") loginUser(event);
  if (event.target.id === "quizForm") submitQuiz(event);
}

function handleChange(event) {
  if (event.target.id === "languageSelect") {
    saveLanguage();
  }
}

window.addEventListener("hashchange", render);
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("change", handleChange);
setInterval(checkReminder, 30000);
render();
