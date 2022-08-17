import { addDoc, collection, orderBy, query, serverTimestamp,
        onSnapshot,
        where} from 'firebase/firestore'
import {db} from './firebaseConfig'




class Chatroom{
    constructor(room,username){
        this.room=room;
        this.username=username;
        this.chatroom=collection(db,'chats');
        this.q=query(this.chatroom,orderBy('created_at'),where("room","==",this.room));
        this.unsub;
    }

    async addChat(message){
        const chat={
            message,
            username: this.username, 
            room: this.room, 
            created_at: serverTimestamp()
        };

        //Saving to database
        addDoc(this.chatroom,chat)
        .catch((err)=>{
            console.log(err);
        });
    }

    async getChats(callback){
            this.unsub=onSnapshot(this.q, snapshot=>{
                snapshot.docChanges().forEach(element => {
                    var checkDatePresent=setInterval(()=>{
                        if(element.doc.data().created_at!=null)
                        {        
                            if(element.type !=='deleted'){
                                callback(element.doc.data());
                            }                                                   
                        }
                        clearInterval(checkDatePresent);
                    },100);                     
            });
        });        
        
    }

    updateName(newName){
        this.username=newName;
        localStorage.setItem('username',newName)
    }

    updateRoom(newRoom){
        this.room=newRoom;
        this.q=query(this.chatroom,orderBy('created_at'),where("room","==",this.room));
        if(this.unsub){
            this.unsub();   
        }        
        //this.getChats();    
    }

    
}


export {Chatroom}


