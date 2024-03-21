const chatSection = document.getElementById("chat-section");
const user_id=1;

const loadChat = (user_id)=>{
axios.get(`http://localhost/flight-agency-project/backend/load-chat.php`, {
    params: {
      user_id
    }
  })
  .then(response => {
    chatSection.innerHTML="";
    const messages = response.data.messages;
    messages.forEach(element => {
        chatSection.innerHTML+= element.sender_id!=user_id?
        `<div class="media w-50 mb-3">
            <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user" width="50" class="rounded-circle">
                <div class="media-body ml-3">
                    <div class="bg-light rounded py-2 px-3 mb-2">
                        <p class="text-small mb-0 text-muted">${element.text}</p>
                    </div>
                    <p class="small text-muted">${element.date}</p>
                </div>
            </div>`
        :
        `<div class="media w-50 ml-auto mb-3">
        <div class="media-body">
            <div class="bg-primary rounded py-2 px-3 mb-2">
                <p class="text-small mb-0 text-white">${element.text}</p>
            </div>
            <p class="small text-muted">${element.date}</p>
            </div>
        </div>`
        ;
        });
    });
};