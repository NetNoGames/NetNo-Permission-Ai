function sendMsg(){
  let msg=document.getElementById("msg").value.trim();
  if(msg==="")return;


  let chat=document.getElementById("chat");
  chat.innerHTML+=`<div class="msg user">${msg}</div>`;


  let text=msg.toLowerCase();
  let reply="";


  function hasAny(words){
    return words.some(w=>text.includes(w));
  }


  // 💬 GREETING
  if(hasAny(["hi","hello","hey","hii","helo","yo","namaste"])){
    reply=["Hey 😎 kya haal hai?","Hello 👋 kaise ho?","Hi bhai 😄 kya chal raha hai?","Heyy 😊 kaise help karu?"][Math.floor(Math.random()*4)];
  }


  // 💬 HOW ARE YOU
  else if(hasAny(["kaise ho","how are you","kya haal","sab theek"])){
    reply=["Main badhiya 😎 tu bata?","Sab mast 💯 tu kaisa hai?","Main ekdum sahi hu 😄"][Math.floor(Math.random()*3)];
  }


  // 💬 FEMALE / RELATION
  else if(hasAny(["girl","gf","ladki","crush","female","love","relationship","breakup"])){
    reply=["Acha 😏 kiski baat ho rahi hai?","Lagta hai koi special hai 👀","Dil ka mamla hai 😌","Focus apne goal pe rakho 🔥"][Math.floor(Math.random()*4)];
  }


  // 💬 MOTIVATION
  else if(hasAny(["sad","depressed","tension","fail","give up","demotivate"])){
    reply=["Chill kar bhai 💯 sab theek ho jayega","Failure se hi success milti hai 🔥","Give up mat kar 😎 tu kar lega"][Math.floor(Math.random()*3)];
  }


  // 🎮 UNITY
  else if(hasAny(["unity","unity engine","unity3d"]) && hasAny(["movement","move","player move"])){
    reply="Use CharacterController ya Rigidbody + Input.GetAxis.";
  }
  else if(hasAny(["unity","camera"]) ){
    reply="Camera follow ke liye LateUpdate use karo.";
  }
  else if(hasAny(["jump"])){
    reply="Jump ke liye AddForce ya velocity use karo.";
  }
  else if(hasAny(["animation","animator"])){
    reply="Animator Controller use karo.";
  }
  else if(hasAny(["ui","canvas"])){
    reply="Canvas UI ke liye use hota hai.";
  }


  // 🧠 UNREAL
  else if(hasAny(["unreal","ue","unreal engine"])){
    reply=["Unreal graphics ke liye best hai","Blueprint system powerful hai","Use Character Movement component"][Math.floor(Math.random()*3)];
  }


  // 💻 CODING
  else if(hasAny(["javascript","js","coding","code","programming"])){
    reply=["JavaScript web ke liye hota hai","Practice se coding aati hai","Debugging important hai"][Math.floor(Math.random()*3)];
  }
  else if(hasAny(["html"])){
    reply="HTML structure banata hai.";
  }
  else if(hasAny(["css"])){
    reply="CSS styling ke liye hota hai.";
  }
  else if(hasAny(["bug","error"])){
    reply="Console se debug karo.";
  }


  // 🎮 GAME DEV
  else if(hasAny(["game","game dev","game idea","engine"])){
    reply=["Unity beginner friendly hai","Game dev me patience chahiye","Unique idea pe kaam karo"][Math.floor(Math.random()*3)];
  }


  // 🔫 GAMEPLAY
  else if(hasAny(["shoot","gun","weapon","bullet"])){
    reply="Raycast ya projectile system use karo.";
  }
  else if(hasAny(["health","damage","hp"])){
    reply="Health system variable se banta hai.";
  }


  // 🎨 GRAPHICS
  else if(hasAny(["lighting","shadow","texture","material"])){
    reply="Graphics optimize karna important hai.";
  }


  // 📱 WEB
  else if(hasAny(["responsive","mobile","api","firebase","database","auth"])){
    reply="Web dev me API + responsive design important hai.";
  }


  // 💰 MONEY
  else if(hasAny(["money","earn","income","paise"])){
    reply="Skill se hi paisa aata hai 💯";
  }


  // 🤖 AI (🔥 MASSIVE KEYWORDS)
  else if(hasAny([
    "ai","artificial intelligence","machine learning","ml","deep learning",
    "neural network","chatgpt","gpt","bot","chatbot","assistant","automation",
    "data science","nlp","natural language processing","model","training",
    "dataset","prediction","algorithm","intelligence","smart ai","ai tool",
    "openai","ai model","ai system","robot","ai software","ai coding",
    "ai website","ai generate","ai content","ai image","ai video"
  ])){
    reply=[
      "AI logic + data pe kaam karta hai 🤖",
      "Machine learning me model train hota hai 💯",
      "AI tools automation ke liye powerful hote hain 🔥"
    ][Math.floor(Math.random()*3)];
  }


  // 😂 FUN
  else if(hasAny(["lol","haha","funny","joke"])){
    reply=["😂 sahi tha","Nice joke 😄","Hassi aa gayi 😂"][Math.floor(Math.random()*3)];
  }


  // 💬 GENERAL
  else if(hasAny(["help","support"])){
    reply="Main help ke liye hu 😎";
  }
  else if(hasAny(["who are you"])){
    reply="Main NetNo AI hoon 🤖";
  }
  else if(hasAny(["thanks"])){
    reply="Welcome bhai 😎";
  }
  else if(hasAny(["bhai","bro"])){
    reply="Bol bhai 🔥";
  }


  // ❗ DEFAULT
  else{
    reply=[
      "Samajh nahi aya 😅",
      "Aur detail me bata 🤔",
      "Interesting hai 🔥",
      "Main sun raha hu 👀",
      "Nice 👍"
    ][Math.floor(Math.random()*5)];
  }


  setTimeout(()=>{
    chat.innerHTML+=`<div class="msg ai">${reply}</div>`;
    chat.scrollTop=chat.scrollHeight;
  },300);


  document.getElementById("msg").value="";
}