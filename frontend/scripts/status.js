const flightsContainer = document.getElementById("flights-container");
let currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm');


axios.get(`http://localhost/flight-agency-project/backend/status.php`)
  .then(response => {

    const flights = response.data.flights;
    let status = "";
    
    flights.forEach(element => {
        let departureDate = moment(element.departure_date).format('YYYY-MM-DD HH:mm');
        let arrivalDate = moment(element.arrival_date).format('YYYY-MM-DD HH:mm');
        
        if(currentDate >= departureDate && currentDate <= arrivalDate){
            status = "Airborne"
        }else if(currentDate >=arrivalDate){
            status = "Landed"
        }else{
            status = "Not departed"
        }

        flightsContainer.innerHTML += `<div class="flex justify-between align-center table-card w-full">
        <div class="flex table-header-left ">
            <p>${element.id}</p>
            <p>${element.departure_city}, ${element.departure_code}</p>
            <p>${element.arrival_city}, ${element.arrival_code}</p>       
        </div>
        <p>${status}</p>
    </div>`
        });
    });