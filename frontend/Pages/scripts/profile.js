const start_chat=document.querySelector("#open-admin-chat");
const close_chat=document.querySelector("#close-chat");
const post_message=document.querySelector("#send-message");
const message=document.querySelector("#message");
const message_list=document.querySelector("#chat");
const feed_back=document.querySelector("#feedback");
const open_feed_back=document.querySelector("#feed-back-btn");
const close_feed_back=document.querySelector("#close-feddback");
const send_feed_back=document.querySelector("#send");
const user_data=localStorage.getItem("credentials");

const get_message_url="http://localhost/flight-agency-project/backend/getmessages.php";
const send_message_url="localhost/flight-agency-project/backend/sendmessage.php";
const send_feedback_url="localhost/flight-agency-project/backend/sendfeedback.php";

const fill_messages=(data)=>{
   for(message in data){
    send_message(message["message"],"user")
   }
   
}
const getMessages=async (url,sender_id)=>{
    try{
    const formData =new FormData();
    formData.append("sender_id",sender_id)
    const result=await axios.post(url,formData);
    const data=await result;
    fill_messages(data)

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
        console.log(informations)
        first_name.innerHTML=informations["first name"];
        last_name.innerHTML=informations["last name"];
        birth_date.innerHTML=informations["date_of_birth"];
        pass_num.innerHTML=informations["passport"];
        coins.innerHTML=informations["coins"];
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
     message_list.innerHTML+=`<li class="message ${who}  to-column mid-Y "><h6 class="user-chat">${message}</h6><span>you</span></li>`
}
start_chat.addEventListener('click',()=>open("admin-chat"))
close_chat.addEventListener('click',()=>close("admin-chat"))
post_message.addEventListener('click',()=>{send_message(message.value,'user')
message.value=""})
open_feed_back.addEventListener('click',()=>open("feedback"));
close_feed_back.addEventListener('click',()=>close("feedback"))