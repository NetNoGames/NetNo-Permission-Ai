let generatedIDs=[];


function generateUniqueID(){
let id;
do{
id="";
for(let i=0;i<16;i++){
id+=Math.floor(Math.random()*10);
}
}while(generatedIDs.includes(id));


generatedIDs.push(id);
return id;
}


function sendMsg(){
let msg=document.getElementById("msg").value.trim();
if(msg==="")return;


let chat=document.getElementById("chat");


chat.innerHTML+=`<div class="msg user">${msg}</div>`;


let reply="";


if(msg.toLowerCase()==="!send index"){
reply="✅ Your Unique ID: "+generateUniqueID();
}else{
reply="❌ Unknown command";
}


setTimeout(()=>{
chat.innerHTML+=`<div class="msg ai">${reply}</div>`;
chat.scrollTop=chat.scrollHeight;
},300);


document.getElementById("msg").value="";
}