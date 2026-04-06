function extraAI(text){


  function hasAny(words){
    return words.some(w=>text.includes(w));
  }


  // 🚫 ABUSE FILTER (gali detect)
  if(hasAny([
    "madarchod","bhosdike","chutiya","gandu","mc","bc","bkl","lodu","kutte","kamina",
    "idiot","stupid","dumb","shut up","fuck","shit","bitch","asshole"
  ])){
    let r=[
      "Please gali mat do 🙏 main help ke liye hu",
      "Respect rakho bhai 😅 main help kar raha hu",
      "Aise words mat use karo, politely baat karo 😊",
      "Main tumhari help ke liye hu, abuse ki zarurat nahi hai"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 📚 STUDY / SCHOOL
  if(hasAny([
    "study","exam","school","college","padhai","homework","assignment","test",
    "marks","percentage","fail exam","pass kaise","notes","subject","maths",
    "science","history","geography","physics","chemistry","biology"
  ])){
    let r=[
      "Daily thoda thoda study karo 💯",
      "Concept samajh ke padho, ratta mat maro 🔥",
      "Time table banao aur follow karo 📚",
      "Practice se marks improve hote hain 😎"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 🏋️ FITNESS
  if(hasAny([
    "gym","workout","fitness","exercise","body","muscle","fat","weight",
    "lose weight","gain weight","diet","protein","running","pushup",
    "abs","six pack","health","fit kaise bane"
  ])){
    let r=[
      "Consistency hi fitness ka secret hai 💪",
      "Diet + workout dono important hai 🔥",
      "Daily exercise karo even thoda hi sahi 😎",
      "Protein intake aur rest bhi zaruri hai 💯"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 🎮 GAMING GENERAL
  if(hasAny([
    "pubg","free fire","bgmi","gta","minecraft","valorant","cod","fortnite",
    "game khelna","gaming","fps game","multiplayer","online game",
    "rank push","noob","pro player","lag game","ping high"
  ])){
    let r=[
      "Practice se hi pro bante hain 🎮",
      "Settings optimize karo better gameplay ke liye 🔥",
      "Lag kam karne ke liye graphics low try karo 😎",
      "Teamwork important hota hai multiplayer me 💯"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 📱 SOCIAL MEDIA
  if(hasAny([
    "instagram","reels","followers","likes","viral","youtube","subs",
    "shorts","content","creator","influencer","video banani","edit video",
    "thumbnail","views","reach","engagement"
  ])){
    let r=[
      "Consistency se hi growth hoti hai 📈",
      "Short videos zyada viral hote hain 🔥",
      "Thumbnail aur hook strong rakho 😎",
      "Trending topics pe content banao 💯"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 💻 TECH / COMPUTER
  if(hasAny([
    "laptop","pc","computer","ram","gpu","cpu","specs","build pc",
    "software","install","windows","android","ios","update","internet",
    "wifi","network","slow pc","fast kaise kare"
  ])){
    let r=[
      "System optimize karo unnecessary apps hata ke 💻",
      "RAM aur storage free rakho 🔥",
      "Regular updates se performance better hoti hai 😎",
      "Hardware upgrade bhi option hai 💯"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 💼 BUSINESS / STARTUP
  if(hasAny([
    "business","startup","idea","company","profit","loss","marketing",
    "brand","customer","growth","startup kaise","online business",
    "passive income","side hustle","sell","product","service"
  ])){
    let r=[
      "Customer problem solve karo 💯",
      "Marketing strong rakho 🔥",
      "Consistency aur patience zaruri hai 😎",
      "Small start karo fir scale karo 🚀"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 🎬 ENTERTAINMENT
  if(hasAny([
    "movie","film","series","web series","netflix","anime","song",
    "music","actor","actress","watch","recommend","best movie"
  ])){
    let r=[
      "Anime try karo 🔥 bahut mast hote hain",
      "Web series binge karne layak hoti hain 😎",
      "Genre depend karta hai tumhare mood pe 💯",
      "Action ya thriller try karo 👀"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // 🧠 LIFE / ADVICE
  if(hasAny([
    "life","future","career","success","goal","dream","problem",
    "confused","kya karu","decision","help me","advice","life kaise",
    "stress","overthinking","focus"
  ])){
    let r=[
      "Goal clear rakho aur us pe kaam karo 💯",
      "Overthinking kam karo, action lo 🔥",
      "Step by step grow karo 😎",
      "Mistakes se seekhna hi growth hai"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // ❤️ FRIEND CHAT
  if(hasAny([
    "kya kar raha","kya kar rha","free hai","bore ho raha","timepass",
    "chal baat kar","sun na","are bhai","oye","sun","kya scene"
  ])){
    let r=[
      "Bol bhai kya scene hai 😎",
      "Main hu na, bata kya baat hai 🔥",
      "Timepass karte hain 😄",
      "Bore mat ho, kuch interesting kar 💯"
    ];
    return r[Math.floor(Math.random()*r.length)];
  }


  // ❗ DEFAULT
  return null;
}