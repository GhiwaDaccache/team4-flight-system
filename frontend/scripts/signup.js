const signin_form=document.querySelector("#signup-form");
const signup_btn=document.querySelector("#submit");
const post="http://localhost/flight-agency-project/backend/signup.php";


const checkInputs=(input)=>{
    return input==''
}

signup_btn.addEventListener("click",(event)=>{
    event.preventDefault();
    const firstname=document.querySelector("#firstname");
    const lastname=document.querySelector("#lastname");
    const password=document.querySelector("#password");
    const email=document.querySelector("#email");
    if(checkInputs(firstname.value)){
        const empty_username=document.querySelector(".empty-username");
        empty_username.className="display-block"
    } else if(checkInputs(password.value)){
        const empty_password=document.querySelector(".empty-password");
        empty_password.className="display-block"
    }else if(checkInputs(email.value)){
        const empty_email=document.querySelector(".empty-email");
        empty_password.className="display-block"
    }
    else if(checkInputs(firstname.value)&&checkInputs(password.value)&&checkInputs(email.value)){
        const empty_firstname=document.querySelector(".empty-firstname");
        empty_firstname.className="display-block"
        const empty_password=document.querySelector(".empty-password");
        empty_password.className="display-block"
        const empty_email=document.querySelector(".empty-email");
        empty_password.className="display-block"
    }
    else{
       
        const formData= new FormData();
        formData.append("first_name",firstname.value);
        formData.append("last_name",lastname.value);
        formData.append("email",email.value);
        formData.append("password",password.value);
        
       const validate=async ()=>{
         try{ 
        const result=await axios.post(post,formData)
        const response=await result.data
        console.log(response);
        if(response.status=="success"){
            console.log("Everythink under control");
       // localStorage.setItem("credentials", JSON.stringify({firstname:firstname.value,lastname:lastname.value,email:email.value,password:password.value}))
        window.location.href="./signin.html"
    }
    else{
        const wrong=document.querySelector(".wrong-signup");
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