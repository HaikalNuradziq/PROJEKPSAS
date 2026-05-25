const STORAGE_USERS = "tradelab_users_v1";
const STORAGE_SESSION = "tradelab_session_v1";
const DEFAULT_BALANCE = 4250;
const PRACTICE_DEMO_URL = "https://www.tradingview.com/chart/";
const app = document.getElementById("app");

const i18n = {
  en: {
    learn: "Learn",
    games: "Games",
    practice: "Practice",
    profile: "Profile",
    settings: "Settings",
    startLearning: "Start Learning",
    startChallenge: "Start Challenge",
    playNow: "Play Now",
    viewAll: "View All",
    signOut: "Sign Out from All Devices",
    reminderText: "Daily market brief",
    editName: "Edit Display Name",
    saveName: "Save Name",
    markRead: "Mark Chapter as Read",
    completed: "Completed",
    back: "Back",
    language: "Language",
    learningReminders: "Learning Reminders",
    quizMaster: "Quiz Master",
    submitQuiz: "Submit Quiz",
    simulatedProfit: "Simulated Profit",
    lessonsLearned: "Lessons Learned",
    testsPassed: "Tests Passed",
    currentStreak: "Current Streak",
    recentBadges: "Recent Badges"
  },
  id: {
    learn: "Belajar",
    games: "Games",
    practice: "Latihan",
    profile: "Profil",
    settings: "Pengaturan",
    startLearning: "Mulai Belajar",
    startChallenge: "Mulai Tantangan",
    playNow: "Main Sekarang",
    viewAll: "Lihat Semua",
    signOut: "Keluar dari Semua Perangkat",
    reminderText: "Pengingat belajar harian",
    editName: "Ubah Nama Tampilan",
    saveName: "Simpan Nama",
    markRead: "Tandai Bab Sudah Dibaca",
    completed: "Selesai",
    back: "Kembali",
    language: "Bahasa",
    learningReminders: "Pengingat Belajar",
    quizMaster: "Master Kuis",
    submitQuiz: "Kirim Jawaban",
    simulatedProfit: "Profit Simulasi",
    lessonsLearned: "Materi Dibaca",
    testsPassed: "Tes Selesai",
    currentStreak: "Streak Saat Ini",
    recentBadges: "Badge Terbaru"
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

const COURSES = [
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
          <p><strong>In technical analysis</strong>, it is important to identify up and down trends before making trading decisions.</p>
          <p>An uptrend, also known as a bull market, is a period when prices are generally moving upward. On a chart, it often appears as a series of higher highs and higher lows.</p>
          <p>A downtrend, also known as a bear market, is a period when prices are generally moving downward. On a chart, it often appears as a series of lower highs and lower lows.</p>
          <h3>Key Signals</h3>
          <ul><li>Look at the overall direction of price movement.</li><li>Observe the slope of the trend line.</li><li>Use support and resistance levels to confirm trend structure.</li></ul>
          <p>In an uptrend, price often finds support and continues to rise. In a downtrend, price often finds resistance and continues to fall.</p>
          <p>In conclusion, identifying up and down trends in technical analysis is crucial for making informed trading decisions. By looking at the overall direction of the price movement, the slope of the trend line, and support and resistance levels, you can determine whether an asset price is in an up trend or a down trend.</p>`
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
];

const QUIZ_QUESTIONS = [
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
];

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
    lang: "en",
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

function t(key) {
  const user = currentUser();
  const lang = user?.lang || "en";
  return i18n[lang][key] || i18n.en[key] || key;
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
  return COURSES.find(course => course.id === id);
}

function totalLessonCount() {
  return COURSES.reduce((sum, course) => sum + course.chapters.length, 0);
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
          <div class="streak-small">${icon("flame", "inline-icon")} ${user.streak} Day Streak</div>
        </div>
      </div>
      <div class="balance-pill">$${Number(user.balance).toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
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
          <h1 class="auth-title">Start Your Journey</h1>
          <p class="auth-subtitle">Access your elite institutional insights and portfolio analytics.</p>
          <form class="auth-panel" id="loginForm">
            <div class="field-group">
              <label class="field-label" for="loginEmail">Institutional Email</label>
              <div class="input-with-icon">
                <span class="input-icon">${icon("mail")}</span>
                <input class="form-input" id="loginEmail" type="email" placeholder="name@firm.com" required />
              </div>
            </div>
            <div class="field-group">
              <div class="field-line">
                <label class="field-label" for="loginPassword">Security Key</label>
                <button class="link-button" type="button" data-action="forgot">Forgot Password?</button>
              </div>
              <div class="input-with-icon">
                <span class="input-icon">${icon("lock")}</span>
                <input class="form-input" id="loginPassword" type="password" placeholder="••••••••••" required />
                <button class="eye-button" type="button" data-toggle-password="loginPassword">${icon("eye")}</button>
              </div>
            </div>
            <button class="primary-btn" type="submit">Sign In To Terminal</button>
            ${message ? `<div class="notice">${message}</div>` : ""}
            <div class="divider">Direct Auth</div>
            <div class="social-grid">
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("google")}Google</button>
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("apple")}Apple</button>
            </div>
          </form>
          <div class="auth-footer">Don’t have an institutional account? <button data-route="/signup">Sign Up</button></div>
        </div>
      </section>
    </main>`;
}

function renderSignup(message = "") {
  app.innerHTML = `
    <main class="phone-shell">
      <section class="auth-screen no-nav">
        <div class="auth-card">
          <h1 class="auth-title">Join Velocity</h1>
          <p class="auth-subtitle">Start your institutional-grade trading journey today.</p>
          <form id="signupForm">
            <div class="field-group">
              <label class="field-label" for="signupName">Full Name</label>
              <input class="form-input" id="signupName" type="text" placeholder="Enter your full name" />
            </div>
            <div class="field-group">
              <label class="field-label" for="signupEmail">Institutional Email</label>
              <input class="form-input" id="signupEmail" type="email" placeholder="name@firm.com" required />
            </div>
            <div class="field-group">
              <label class="field-label" for="signupPassword">Security Key (Password)</label>
              <div class="input-with-icon">
                <input class="form-input" id="signupPassword" type="password" placeholder="••••••••••" required minlength="6" />
                <button class="eye-button" type="button" data-toggle-password="signupPassword">${icon("eye")}</button>
              </div>
            </div>
            <button class="primary-btn large-glow" type="submit">Create Account</button>
            ${message ? `<div class="notice">${message}</div>` : ""}
            <div class="divider">Or Register With</div>
            <div class="social-grid">
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("google")}Google</button>
              <button class="social-btn" type="button" data-action="demo-auth">${socialLogo("apple")}Apple</button>
            </div>
            <div class="auth-footer">Already have an account? <button data-route="/login">Sign In</button></div>
          </form>
        </div>
      </section>
    </main>`;
}

function renderLearn() {
  const user = currentUser();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <section class="hero-card">
      <span class="pill red">Beginner Path</span>
      <h1 class="hero-title">Trading Basics</h1>
      <p class="hero-copy">Master the fundamentals of the global markets in 15 minutes.</p>
      <button class="primary-btn" data-route="/course/trading-basics">${t("startLearning")}</button>
    </section>
    <div class="section-head">
      <h2 class="section-title">Knowledge Hub</h2>
      <button class="view-link" data-route="/course/trading-basics">${t("viewAll")}</button>
    </div>
    <div class="course-grid">
      ${COURSES.slice(1, 3).map(course => courseCard(course)).join("")}
      ${COURSES.slice(3).map(course => courseCard(course, true)).join("")}
    </div>
    <article class="tip-card">
      <div class="course-icon">${icon("light")}</div>
      <div><h3>Daily Tip: Risk Management</h3><p>Never risk more than 1% of your total portfolio on a single trade. Preservation is key.</p></div>
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
  const course = courseById(courseId) || COURSES[0];
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">${course.hubTitle || course.title}</h1>
    <p class="page-subtitle">${course.subtitle}</p>
    <div class="chapter-list">
      ${course.chapters.map((chapter, index) => `
        <button class="chapter-btn" data-route="/lesson/${course.id}/${index}">
          Ch ${index + 1} : ${chapter.title}
          <span class="chapter-meta">${chapter.subtitle}</span>
        </button>`).join("")}
    </div>
  `, { noNav: true });
}

function renderLesson(courseId, chapterIndex) {
  const course = courseById(courseId) || COURSES[0];
  const chapter = course.chapters[Number(chapterIndex)] || course.chapters[0];
  const key = `${course.id}:${chapterIndex}`;
  const user = currentUser();
  const done = user.completedLessons.includes(key);
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">Chapter ${Number(chapterIndex) + 1}</h1>
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
    <div class="candle-diagram" aria-label="Candlestick open high low close diagram">
      <div class="candle green"><div class="candle-body"></div><span class="candle-label top">Upper Wick</span><span class="candle-label mid">Close</span><span class="candle-label low">Open</span><span class="candle-label bottom">Lower Wick</span></div>
      <div class="candle red"><div class="candle-body"></div><span class="candle-label top">Upper Wick</span><span class="candle-label mid">Open</span><span class="candle-label low">Close</span><span class="candle-label bottom">Lower Wick</span></div>
    </div>`;
}

function renderGames() {
  const user = currentUser();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <section class="hero-card green-hero">
      <span class="pill">Daily Challenge</span>
      <h1 class="hero-title">Pattern Hunter Challenge</h1>
      <p class="hero-copy">Identify 10 consecutive candlestick patterns in a volatile market simulation to earn a Rare Analyst Badge.</p>
      <button class="primary-btn" data-route="/quiz">${t("startChallenge")}</button>
    </section>
    <div class="section-head">
      <h2 class="section-title">Arcade Floor</h2>
      <button class="icon-round-btn secondary-btn" data-route="/quiz">${icon("menu")}</button>
    </div>
    <div class="game-list">
      <button class="game-card" data-route="/quiz"><div class="game-icon">${icon("trend")}</div><h3>Pattern Hunter</h3><p>Master technical analysis by spotting head-and-shoulders, flags, wedges, and reversals.</p><div class="score-label">Best Score</div><div class="score-value">24,450 XP</div></button>
      <button class="game-card image-card" data-route="/quiz"><h3>${t("quizMaster")}</h3><p>Challenge your macro-economic knowledge. Do you know how the Fed affects your portfolio?</p><div class="score-label">Rank</div><div class="score-value" style="color:#ffb4b4">Global Top 5%</div></button>
      <button class="game-card" data-route="/quiz"><div class="game-icon">${icon("news")}</div><h3>News Reaction</h3><p>Predict market movement based on breaking headlines. Speed and accuracy are key.</p><div class="score-label">Best Score</div><div class="score-value">18,200 XP</div></button>
    </div>
  `, { active: "games" });
}

function renderQuiz() {
  app.innerHTML = shell(`
    ${backBar("Tradelab.id")}
    <h1 class="page-title">Quiz Master</h1>
    <p class="page-subtitle">10 multiple-choice questions based on the Learn materials.</p>
    <form id="quizForm">
      ${QUIZ_QUESTIONS.map((item, index) => `
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
  app.innerHTML = shell(`
    ${brandRow(user)}
    <div class="progress-wrap">
      <div class="progress-ring" style="--progress:${progress}%">
        <div class="progress-inner"><span class="progress-number">${progress}%</span><span class="progress-label">Completion</span><div class="level-pill">${progress >= 75 ? "Advanced" : progress >= 35 ? "Intermediate" : "Beginner"}<br/>Level</div></div>
      </div>
    </div>
    <h1 class="page-title" style="font-size:38px;text-align:center">Knowledge Journey</h1>
    <p class="page-subtitle" style="text-align:center">You're making steady progress through the market fundamentals. Keep going.</p>
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
      <div class="stat-card"><div class="stat-icon">${icon("flame")}</div><span class="stat-number">${user.streak} Days</span><span class="stat-label">${t("currentStreak")}</span></div>
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
  app.innerHTML = shell(`
    ${brandRow(user)}
    <h1 class="page-title">Settings</h1>
    <p class="page-subtitle">Customize your analytical environment</p>
    <div class="settings-list">
      <button class="setting-card" data-route="/practice"><div class="setting-icon">${icon("trend")}</div><div><h3>Simulator</h3><p>Real-time market engine settings</p></div><span class="chevron">›</span></button>
      <article class="setting-card">
        <div class="setting-icon">${icon("bell")}</div><div><h3>${t("learningReminders")}</h3><p>${t("reminderText")} at ${user.reminder.time}</p></div><button class="toggle ${user.reminder.enabled ? "active" : ""}" data-action="toggle-reminder" aria-label="Toggle reminder"></button>
        <div class="settings-subpanel">
          <input class="time-input" type="time" id="reminderTime" value="${user.reminder.time}" />
          <button class="secondary-btn" data-action="save-reminder-time">Save Reminder Time</button>
        </div>
      </article>
      <article class="setting-card">
        <div class="setting-icon">${icon("language")}</div><div><h3>${t("language")}</h3><p>Select your primary interface language</p></div><span></span>
        <div class="settings-subpanel">
          <select class="form-select" id="languageSelect"><option value="en" ${user.lang === "en" ? "selected" : ""}>English (US)</option><option value="id" ${user.lang === "id" ? "selected" : ""}>Indonesia</option></select>
        </div>
      </article>
      <button class="setting-card" data-action="feedback"><div class="setting-icon">${icon("feedback")}</div><div><h3>Feedback</h3><p>Help us improve the analyst experience</p></div><span class="chevron">›</span></button>
    </div>
    <button class="signout-btn" data-action="logout">${t("signOut")}</button>
    <p class="version-text">Version 1.0.0 - Stable • © 2026 Analyst Inc.</p>
  `, { active: "settings" });
}

function renderPractice() {
  const user = currentUser();
  app.innerHTML = shell(`
    ${brandRow(user)}
    <h1 class="page-title">Practice</h1>
    <p class="page-subtitle">Practice reading trends, support, resistance, and pattern signals.</p>
    <section class="hero-card green-hero practice-demo-card">
      <span class="pill">External Demo</span>
      <h2 class="hero-title">Market Replay Lab</h2>
      <p class="hero-copy">Open the demo chart on a separate website to practice reading market movement. This button only opens a new tab, so it does not change the existing HTML, CSS, JavaScript, or PHP flow in this project.</p>
      <div class="practice-actions">
        <a class="primary-btn external-demo-link" href="${PRACTICE_DEMO_URL}" target="_blank" rel="noopener noreferrer">Open Demo Website</a>
        <button class="secondary-btn" data-route="/quiz">Open Practice Quiz</button>
      </div>
    </section>
    <div class="desktop-wide-grid">
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>Trend Reading</h3><p class="page-subtitle">Identify whether the market is forming higher highs, higher lows, lower highs, or lower lows.</p></article>
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>Risk Setup</h3><p class="page-subtitle">Plan stop loss, position size, and risk-to-reward before entering a trade.</p></article>
      <article class="content-card" style="padding:24px;border-radius:24px"><h3>Journal</h3><p class="page-subtitle">Record your simulated trade reason, result, and lesson.</p></article>
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
  if (users[email]) return renderSignup("Email already exists. Please sign in instead.");
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
  if (!users[email] || users[email].password !== password) return renderLogin("Wrong email or security key. Create an account first or use demo auth.");
  setSessionEmail(email);
  routeTo("/learn");
}

function demoAuth() {
  const email = "demo@tradelab.id";
  const users = getUsers();
  if (!users[email]) users[email] = buildNewUser({ fullName: "Demo User", email, password: "demo123" });
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
  const value = document.getElementById("languageSelect")?.value || "en";
  updateCurrentUser(user => { user.lang = value; });
  renderSettings();
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
    new Notification("Tradelab.id Learning Reminder", { body: "Open your daily market brief and keep your streak alive." });
  } else {
    alert("Tradelab.id Learning Reminder: open your daily lesson and keep your streak alive.");
  }
  updateCurrentUser(item => { item.reminder.lastNotified = currentDate; });
}

function submitQuiz(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  let score = 0;
  QUIZ_QUESTIONS.forEach((item, index) => {
    if (Number(form.get(`q${index}`)) === item.correct) score += 1;
  });
  updateCurrentUser(user => {
    if (!user.completedQuizzes.includes("main-quiz")) user.completedQuizzes.push("main-quiz");
    user.balance += score * 25;
    unlockAchievements(user);
  });
  markLearningActivity();
  event.currentTarget.innerHTML = `
    <div class="quiz-result"><strong>Your score: ${score}/${QUIZ_QUESTIONS.length}</strong><br/>Quiz completed. Your progress, balance, streak, and achievements have been updated.</div>
    <button class="primary-btn" type="button" data-route="/profile">View Profile Progress</button>
    <button class="secondary-btn" type="button" data-route="/games" style="margin-top:12px;width:100%">Back to Games</button>`;
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
  if (action === "forgot") alert("Frontend placeholder: connect this button to your XAMPP/PHP password reset flow.");
  if (action === "complete-lesson") completeLesson(event.target.closest("[data-key]").dataset.key);
  if (action === "save-name") saveName();
  if (action === "toggle-reminder") toggleReminder();
  if (action === "save-reminder-time") saveReminderTime();
  if (action === "feedback") alert("Feedback form placeholder. Connect this to a database table or email endpoint.");
  if (action === "logout") { clearSession(); routeTo("/login"); }
}

function handleSubmit(event) {
  if (event.target.id === "signupForm") registerUser(event);
  if (event.target.id === "loginForm") loginUser(event);
  if (event.target.id === "quizForm") submitQuiz(event);
}

function handleChange(event) {
  if (event.target.id === "languageSelect") saveLanguage();
}

window.addEventListener("hashchange", render);
document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("change", handleChange);
setInterval(checkReminder, 30000);
render();
