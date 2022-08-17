import { roundToNearestMinutes } from "date-fns";
import { Chatroom } from "./chat";
import { ChatUI } from "./ui";

const chatList=document.querySelector('.chat-list');
const newChatForm=document.querySelector('.new-chat');
const newNameForm=document.querySelector('.new-name');
const updateMsg=document.querySelector('.update-msg');
const rooms=document.querySelector('.chat-rooms')

//Checking local storage for name
const storedName=localStorage.username ? localStorage.username : 'anon' ;



const chatroom=new Chatroom('general',storedName);
const chatUI=new ChatUI(chatList);

chatroom.getChats( data=> chatUI.render(data) );

//adding new Chat

newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(()=>{
        newChatForm.reset();
    })
    .catch(err=>{
        console.log(err)
    });
})


// updating name

newNameForm.addEventListener('submit',e=>{
    e.preventDefault();
    const newName=newNameForm.name.value.trim();
    chatroom.updateName(newName);
    newNameForm.reset();

    // Show and hide updated name
    updateMsg.innerText=`Your new name is ${newName}`
    setTimeout(()=>{
        updateMsg.innerText='';
    },3000)
    
});

//update chat rooms
rooms.addEventListener('click',e=>{
   if(e.target.tagName==='BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats( data => chatUI.render(data))
   }
})