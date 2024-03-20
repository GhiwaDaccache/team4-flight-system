const signin_form=document.querySelector("#signin-form");
const submit_btn=document.querySelector("#submit");
const post="http://localhost/flight-agency-project/backend/signin.php";


const checkInputs=(input)=>{
    return input==''
}
submit_btn.addEventListener("click",()=>{
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
        const formData= new FormData();
       formData.append("username",username.value);
       formData.append("password",password.value);
       const validate=async ()=>{
         try{ 
        const result=await axios.post(post,formData)
        const response=await result
        const data=response.data;
       
        if(data.status=="success"){
          
        localStorage.setItem("credentials", JSON.stringify({username:username.value,password:password.value,data}))
        window.location.href="./profile.html"
    }
    else{
        
        window.location.href="./signup.html";
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