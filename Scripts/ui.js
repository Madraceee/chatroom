import { formatDistanceStrict} from "date-fns";
import { serverTimestamp } from "firebase/firestore";
class ChatUI{
    constructor(list){
        this.list=list;        
    }

    render(dataList){
        const d=new Date();
        const when=formatDistanceStrict(dataList.created_at.toDate(),d.getTime(),{addSuffix: true})
        const html=`<li class="list-group-item">
                        <span class="username">${dataList.username}</span>
                        <span class="message">${dataList.message}</span>
                        <div class="time">${when}</div>
                    </li>`;
        
        this.list.innerHTML+=html;
    }

    clear()
    {
        this.list.innerHTML='';
    }
}


export {ChatUI}