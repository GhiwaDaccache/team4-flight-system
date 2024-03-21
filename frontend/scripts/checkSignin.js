const signin=localStorage.getItem("credentials");
const logout=document.querySelector("#logout-btn");
const login=document.querySelector("#login-btn");
const Signup=document.querySelector("#signup-btn");
if(signin){
   
logout.classList.remove("hidden");
login.classList.add("hidden");
Signup.classList.add("hidden");

}

logout.addEventListener('click',()=>{
    logout.classList.add("hidden");
login.classList.remove("hidden");
Signup.classList.remove("hidden");
    window.location.href="../Pages/signin.html";
    //localStorage.removeItem("credentials")
})
Signup.addEventListener('click',()=>{
    logout.classList.remove("hidden");
login.classList.add("hidden");
Signup.classList.add("hidden");
    window.location.href="../frontend/Pages/signup.html"
})
login.addEventListener('click',()=>{
    logout.classList.remove("hidden");
    login.classList.add("hidden");
    Signup.classList.add("hidden");
    window.location.href="../frontend/Pages/signin.html"

})