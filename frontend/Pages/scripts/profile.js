const start_chat=document.querySelector("#open-admin-chat");
const close_chat=document.querySelector("#close-chat");
const post_message=document.querySelector("#send-message");
const message=document.querySelector("#message");
const message_list=document.querySelector("#chat");
const feed_back=document.querySelector("#feedback");
const open_feed_back=document.querySelector("#feed-back-btn");
const close_feed_back=document.querySelector("#close-feddback");
const send_feed_back=document.querySelector("#send");



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