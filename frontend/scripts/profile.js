const start_chat=document.querySelector("#open-admin-chat");
const close_chat=document.querySelector("#close-chat");
const post_message=document.querySelector("#send-message");
const message=document.querySelector("#message");
const message_list=document.querySelector("#chat");
const feed_back=document.querySelector("#feedback");
const btn_feed_back=document.querySelector("#feed-back-btn");
const close_feed_back=document.querySelector("#close-feddback");
const send_feed_back=document.querySelector("#send");
const user_data=localStorage.getItem("credentials");
const feedback_send=document.querySelector("#send");
var id=null;

const get_message_url="http://localhost/flight-agency-project/backend/getmessages.php";
const send_message_url="http://localhost/flight-agency-project/backend/sendmessage.php";
const send_feedback_url="http://localhost/flight-agency-project/backend/sendfeedback.php";


const sendMessage=async(url,id,message,chat=1)=>{
    try{
        const formData =new FormData();
        formData.append("chat_id",chat)
        formData.append("sender_id",id)
        formData.append("message",message)
        const result=await axios.post(url,formData);
        
        
    
    }
        catch(err){
            console.log(err)
        }
}
const fill_messages=(data)=>{
   console.log(data)
   data.results.forEach ((el)=>send_message(el["message"],"user"))
   
   
}
const getMessages=async (url,sender_id)=>{
    try{
    const formData =new FormData();
    formData.append("sender_id",sender_id)
    const result=await axios.post(url,formData);
    const data=await result;
    fill_messages(data.data)

}
    catch(err){
        console.log(err)
    }
}

const fill_infos=(data)=>{
    if(data){
        const first_name=document.querySelector("#firstname");
        const last_name=document.querySelector("#lastname");
        const birth_date=document.querySelector("#birth-date");
        const pass_num=document.querySelector("#pass-num");
        const coins=document.querySelector("#coins");
        const informations=JSON.parse(data).data;
   
        first_name.innerHTML=informations["first name"];
        last_name.innerHTML=informations["last name"];
        birth_date.innerHTML=informations["date_of_birth"];
        pass_num.innerHTML=informations["passport"];
        coins.innerHTML=informations["coins"];
        id=informations["id"]
        getMessages(get_message_url,informations["id"])
    }
}
fill_infos(user_data)
const close=(target_id)=>{
    document.querySelector(`#${target_id}`).classList.add("hide");
}
const open=(target_id)=>{
    const element=document.getElementById(target_id)
    element.classList.remove("hide");
}
const send_message=(message,who)=>{
     message_list.innerHTML+=`<li class="message ${who}  to-column mid-Y "><h6 class="user-chat">${message}</h6><span>you</span></li>`;
     
}
start_chat.addEventListener('click',()=>open("admin-chat"))
close_chat.addEventListener('click',()=>close("admin-chat"))
post_message.addEventListener('click',()=>{send_message(message.value,'user')
sendMessage(send_message_url,id,message.value)
message.value=""})
btn_feed_back.addEventListener('click',()=>open("feedback"));
close_feed_back.addEventListener('click',()=>close("feedback"))
feedback_send.addEventListener('click',async()=>{
    const flight_id=document.querySelector("#flight").value;
    const rate =document.querySelector("#rate").value;
    const feddback_text=document.querySelector("#feed-text").value
    try{
        const formData =new FormData();
        formData.append("user_id",id)
        formData.append("flight_id",flight_id)
        formData.append("rating",rate)
        formData.append("review_text",feddback_text)
        //formData.append("date_submit",new Date())
        const result=await axios.post(send_feedback_url,formData);
        
        
    
    }
        catch(err){
            console.log(err)
        }
})