const start_chat=document.querySelector("#open-admin-chat");
const close_chat=document.querySelector("#close-chat")
function close(target_id){
    //item.parentNode.parentNode.classList.remove("hide")
    document.querySelector(`#${target_id}`).classList.add("hide");
}

const open=(target_id)=>{
   
    const element=document.getElementById(target_id)
    element.classList.remove("hide");
   
}
start_chat.addEventListener('click',()=>open("admin-chat"))
close_chat.addEventListener("click",()=>close("admin-chat"))
