const inboxSection = document.getElementById("sidebar-section");


axios.get(`http://localhost/flight-agency-project/backend/load-inbox.php`)
  .then(response => {
    console.log(response);
    const inbox = response.data.inbox;
    inboxSection.innerHTML="";
    inbox.forEach(element => {
        inboxSection.innerHTML+= 
        `
        <a data-user-id="${element.user_id}" class="list-group-item list-group-item-action rounded-0">
            <div class="media"><img
                    src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" alt="user"
                    width="50" class="rounded-circle">
                <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h6 class="mb-0">${element.sender_name}</h6>
                    </div>
                    <p class="font-italic mb-0 text-small">${element.text}</p>
                </div>
            </div>
        </a>`
        ;
        })
    }).then(()=>{
        inboxElements = inboxSection.querySelectorAll('a');
        inboxElements.forEach(anchor => {
            anchor.addEventListener('click', function() {
                const userId = this.dataset.userId; 
                loadChat(userId);
                inboxElements.forEach((e) => e.classList.remove('active'));
                inboxElements.forEach((e) => e.classList.remove('text-white'));
                inboxElements.forEach((e) => e.classList.add('list-group-item-light'));
                this.classList.remove('list-group-item-light');
                this.classList.add('active');
                this.classList.add('text-white');
            });
            });
    });

    // add event listener on each <a> tag an invoke loadChat passing parameter from data-user-id attribute