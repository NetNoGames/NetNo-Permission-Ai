function sendMsg(){
let msg=document.getElementById("msg").value.trim();
if(msg==="")return;
let chat=document.getElementById("chat");
chat.innerHTML+=`<div class="msg user">${msg}</div>`;
let reply="";
let text=msg.toLowerCase();

if(text.includes("unity movement")){
reply=`🎮 Unity Movement Script:
<pre>
using UnityEngine;
public class Player : MonoBehaviour {
public float speed = 5f;
void Update(){
float h = Input.GetAxis("Horizontal");
float v = Input.GetAxis("Vertical");
transform.Translate(new Vector3(h,0,v)*speed*Time.deltaTime);
}}
</pre>`;
}
else if(text.includes("unreal movement")){
reply=`🧠 Unreal Blueprint:
Use Add Movement Input node
Axis Mapping: MoveForward / MoveRight`;
}
else if(text.includes("unity settings")){
reply=`⚙️ Unity Setup:
- Add Rigidbody
- Add Collider
- Set Input Axis`;
}
else{
reply="🤖 NetNo AI: Command not found";
}

setTimeout(()=>{
chat.innerHTML+=`<div class="msg ai">${reply}</div>`;
chat.scrollTop=chat.scrollHeight;
},300);

document.getElementById("msg").value="";
}