const socket= io();

const form= document.getElementById("chat-form");
const messageInput= document.getElementById("message");
const usernameInput= document.getElementById("username");
const messagesDiv= document.getElementById("messages");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const messageData={
        user: usernameInput.value,
        text:messageInput.value,
    };
    socket.emit("chatMessage",messageData);
    messageInput.value="";
});
socket.on("chatMessage",(msg)=>{
    const div= document.createElement("div");
    div.classList.add("message");
    div.innerHTML=`<span>${msg.user}:</span>${msg.text}`;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop= messagesDiv.scrollHeight;
});