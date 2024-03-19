const signin_form=document.querySelector("#signin-form");
const post="http://localhost/flight-agency-project/backend/signin.php";


const checkInputs=(input)=>{
    return input==''
}
signin_form.addEventListener("submit",()=>{
    const username=document.querySelector("#username");
    const password=document.querySelector("#password");
    if(checkInputs(username.value)){
        const empty_username=document.querySelector(".empty-username");
        empty_username.className="display-block"
    } else if(checkInputs(password.value)){
        const empty_password=document.querySelector(".empty-password");
        empty_password.className="display-block"
    }
    else if(checkInputs(username.value)&&checkInputs(password.value)){
        const empty_username=document.querySelector(".empty-username");
        empty_username.className="display-block"
        const empty_password=document.querySelector(".empty-password");
        empty_password.className="display-block"
    }
    else{
        const data={
            username:username.value,
            password:password.value
        }
       
       const validate=async ()=>{
         try{ 
        const result=await axios.post(post,data)
        const response=await result.json()
        if(response.status=="success"){
        localStorage.setItem("credentials", JSON.stringify({username:username.value,password:password.value,response}))
        window.location.href="/path"
    }
    else{
        const wrong=document.querySelector(".wrong-signin");
        wrong.className="display-block"
    }
    }
    catch(err){
        console.log(err.message)
    }
    }
    validate();
    }
})