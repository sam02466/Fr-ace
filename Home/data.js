// Data for category game rendering
const categoryData = {
  slots: {
    title: "Slots",
    type: "grid",
    games: [
      { name: "JDB", img: "images/game1.png", fallback: "https://via.placeholder.com/150/d4af37/000000?text=JDB" },
      { name: "099 Game", img: "images/game2.png", fallback: "https://via.placeholder.com/150/118844/ffffff?text=099+GAME" },
      { name: "M Game", img: "images/game3.png", fallback: "https://via.placeholder.com/150/bb2222/ffffff?text=M+GAME" },
      { name: "G9", img: "images/game4.png", fallback: "https://via.placeholder.com/150/e67e22/ffffff?text=G9" },
      { name: "INOUT", img: "images/game5.png", fallback: "https://via.placeholder.com/150/3498db/ffffff?text=INOUT" },
      { name: "BIRA MI TIMES", img: "images/game6.png", fallback: "https://via.placeholder.com/150/9b59b6/ffffff?text=BIRA+TIMES" },
      { name: "YGGDRASIL", img: "images/game7.png", fallback: "https://via.placeholder.com/150/2ecc71/ffffff?text=YGGDRASIL" },
      { name: "Evolution", img: "images/game8.png", fallback: "https://via.placeholder.com/150/34495e/ffffff?text=Evolution" },
      { name: "JILI Game", img: "images/game9.png", fallback: "https://via.placeholder.com/150/f1c40f/000000?text=JILI+GAME" }
    ]
  },
  trending: {
    title: "Trending",
    type: "grid",
    games: [
      { name: "Trending 1", img: "images/game1.png", fallback: "https://via.placeholder.com/150/ffaa00/ffffff?text=Trending+1" },
      { name: "Trending 2", img: "images/game2.png", fallback: "https://via.placeholder.com/150/ff5500/ffffff?text=Trending+2" },
      { name: "Trending 3", img: "images/game3.png", fallback: "https://via.placeholder.com/150/ff0055/ffffff?text=Trending+3" },
      { name: "Trending 4", img: "images/game4.png", fallback: "https://via.placeholder.com/150/aa00ff/ffffff?text=Trending+4" },
      { name: "Trending 5", img: "images/game5.png", fallback: "https://via.placeholder.com/150/0055ff/ffffff?text=Trending+5" },
      { name: "Trending 6", img: "images/game6.png", fallback: "https://via.placeholder.com/150/00aa55/ffffff?text=Trending+6" }
    ]
  },
  betting: {
    title: "Betting",
    type: "grid",
    games: [
      { name: "Betting 1", img: "images/game1.png", fallback: "https://via.placeholder.com/150/8b0000/ffffff?text=Betting+1" },
      { name: "Betting 2", img: "images/game2.png", fallback: "https://via.placeholder.com/150/a52a2a/ffffff?text=Betting+2" },
      { name: "Betting 3", img: "images/game3.png", fallback: "https://via.placeholder.com/150/d2691e/ffffff?text=Betting+3" },
      { name: "Betting 4", img: "images/game4.png", fallback: "https://via.placeholder.com/150/b8860b/ffffff?text=Betting+4" }
    ]
  },
  sports: {
    title: "Sports",
    type: "wide",
    items: [
      {
        title: "Sports",
        subtitle: "WICKETS Sports",
        logo: "images/sports-logo1.png",
        rightImg: "images/sports-banner1.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=9+Sports",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Sports+Players+1"
      },
      {
        title: "Sports",
        subtitle: "Saba Sports",
        logo: "images/sports-logo2.png",
        rightImg: "images/sports-banner2.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=SABA",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Sports+Players+2"
      },
      {
        title: "Sports",
        subtitle: "AR Sports",
        logo: "images/sports-logo3.png",
        rightImg: "images/sports-banner3.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=ARBET",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Sports+Players+3"
      }
    ]
  },
  casino: {
    title: "Casino",
    type: "wide",
    items: [
      {
        title: "Casino",
        subtitle: "Evolution Gaming",
        logo: "images/casino-logo1.png",
        rightImg: "images/casino-banner1.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=EVOLUTION",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Live+Dealer+1"
      },
      {
        title: "Casino",
        subtitle: "Pragmatic Live",
        logo: "images/casino-logo2.png",
        rightImg: "images/casino-banner2.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=PRAGMATIC",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Live+Dealer+2"
      },
      {
        title: "Casino",
        subtitle: "Sexy Baccarat",
        logo: "images/casino-logo3.png",
        rightImg: "images/casino-banner3.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=SEXY+BAC",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Live+Dealer+3"
      },
      {
        title: "Casino",
        subtitle: "Ezugi Casino",
        logo: "images/casino-logo4.png",
        rightImg: "images/casino-banner4.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=EZUGI",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Live+Dealer+4"
      }
    ]
  },
  rummy: {
    title: "Rummy",
    type: "wide",
    items: [
      {
        title: "Rummy",
        subtitle: "King Rummy",
        logo: "images/rummy-logo1.png",
        rightImg: "images/rummy-banner1.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=KING+RUMMY",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Rummy+Cards+1"
      },
      {
        title: "Rummy",
        subtitle: "V8 Rummy",
        logo: "images/rummy-logo2.png",
        rightImg: "images/rummy-banner2.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=V8+RUMMY",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Rummy+Cards+2"
      },
      {
        title: "Rummy",
        subtitle: "JDB Rummy",
        logo: "images/rummy-logo3.png",
        rightImg: "images/rummy-banner3.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=JDB+RUMMY",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Rummy+Cards+3"
      }
    ]
  },
  contest: {
    title: "Contest",
    type: "wide",
    items: [
      {
        title: "Contest",
        subtitle: "Daily Jackpot Championship",
        logo: "images/contest-logo1.png",
        rightImg: "images/contest-banner1.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=DAILY+CUP",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Trophy+Graphics+1"
      },
      {
        title: "Contest",
        subtitle: "Weekly VIP Tournament",
        logo: "images/contest-logo2.png",
        rightImg: "images/contest-banner2.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=VIP+TOURNAMENT",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Trophy+Graphics+2"
      },
      {
        title: "Contest",
        subtitle: "Monthly Leaderboard Contest",
        logo: "images/contest-logo3.png",
        rightImg: "images/contest-banner3.png",
        fallbackLogo: "https://via.placeholder.com/90x30/000000/ffffff?text=LEADERBOARD",
        fallbackRight: "https://via.placeholder.com/220x140/f4cb76/000000?text=Trophy+Graphics+3"
      }
    ]
  },
  "all-games": {
    title: "All Games",
    type: "grid",
    games: [
      { name: "Game 1", img: "images/game1.png", fallback: "https://via.placeholder.com/150/444/fff?text=Game+1" },
      { name: "Game 2", img: "images/game2.png", fallback: "https://via.placeholder.com/150/555/fff?text=Game+2" },
      { name: "Game 3", img: "images/game3.png", fallback: "https://via.placeholder.com/150/666/fff?text=Game+3" },
      { name: "Game 4", img: "images/game4.png", fallback: "https://via.placeholder.com/150/777/fff?text=Game+4" },
      { name: "Game 5", img: "images/game5.png", fallback: "https://via.placeholder.com/150/888/fff?text=Game+5" },
      { name: "Game 6", img: "images/game6.png", fallback: "https://via.placeholder.com/150/999/fff?text=Game+6" }
    ]
  }
};
