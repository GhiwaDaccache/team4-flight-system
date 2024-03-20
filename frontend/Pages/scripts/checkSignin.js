const signin=localStorage.getItem("credentials");
const logout=document.querySelector("#logout-btn");
const login=document.querySelector("#login-btn");
const Signup=document.querySelector("#signup-btn");
if(signin){
   
logout.classList.remove("hide");
login.classList.add("hide");
Signup.classList.add("hide");

}

logout.addEventListener('click',()=>{
    logout.classList.add("hide");
login.classList.remove("hide");
Signup.classList.remove("hide");
    window.location.href="./signin.html";
    //localStorage.removeItem("credentials")
})
Signup.addEventListener('click',()=>{
    logout.classList.remove("hide");
login.classList.add("hide");
Signup.classList.dd("hide");
    window.location.href="./signin.html"
})
login.addEventListener('click',()=>{
    logout.classList.remove("hide");
    login.classList.add("hide");
    Signup.classList.dd("hide");
    window.location.href="./signup.html"

})