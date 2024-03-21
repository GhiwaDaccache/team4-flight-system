const user_data=localStorage.getItem("credentials");
const reviews_table=document.querySelector("#reviews");
const get_reviews_url="http://localhost/flight-agency-project/backend/getfeedbacks.php";

const setUserData=(user)=>{
    console.log(user)
    if(user){
    const name=document.querySelector("#name");
    name.innerHTML=JSON.parse(user).username
}
}
setUserData(user_data);
const fillReviewsTable=async (url)=>{
    const result =await axios.get(url);
    const {data}=await result;
    const {reviews}=data
    reviews.forEach(element => {
        const{user_id,flight_id,review_text,rating}=element
        reviews_table.innerHTML+=`<tr>
        <td>${review_text}</td>
        <td>user${user_id}</td>
        <td>${new Date().getDay()}:${new Date().getMonth()}:${new Date().getFullYear()}</td>
        <td>${flight_id}</td>
        <td>${rating}</td>
        </tr>`
    });
}
fillReviewsTable(get_reviews_url)