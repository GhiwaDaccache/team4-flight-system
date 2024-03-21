const user_data=localStorage.getItem("credentials");


const setUserData=(user)=>{
    console.log(user)
    if(user){
    const name=document.querySelector("#name");
    name.innerHTML=JSON.parse(user).username
}
}
setUserData(user_data)