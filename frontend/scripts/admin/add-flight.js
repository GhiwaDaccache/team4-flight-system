let airplaneInput = document.getElementById("airplane-input");
let airlineInput = document.getElementById("airline-input");
let fromAirport = document.getElementById("departure-airport-input");
let toAirport = document.getElementById("arrival-airport-input");
const addButton = document.getElementById("add-btn");
let price = document.getElementById("price");
let departureTime = document.getElementById("departure-date");
let arrivalTime = document.getElementById("arrival-date");




axios.get(`http://localhost/flight-agency-project/backend/load-airlines.php`)
  .then(response => {
    const airlines = response.data.airlines;
    airlines.forEach(element => {
        airlineInput.innerHTML += `<option value="${element.id}">${element.name}</option>`
        });
});

axios.get(`http://localhost/flight-agency-project/backend/load-airplanes.php`)
.then(response => {
    const airplanes = response.data.airplanes;
    airplanes.forEach(element => {
        airplaneInput.innerHTML += `<option value="${element.id}">${element.model}</option>`
        });
});


axios.get(`http://localhost/flight-agency-project/backend/load-filter.php`)
  .then(response => {
    const airports = response.data.airports;
    airports.forEach(element => {
        fromAirport.innerHTML += `<option value="${element.id}">${element.code} - ${element.country}</option>`
        toAirport.innerHTML += `<option value="${element.id}">${element.code} - ${element.country}</option>`
        });
});

const addFlight = () => {

    const formData = new FormData();
    formData.append('airplane', document.getElementById("airplane-input").value);
    formData.append('airline', document.getElementById("airline-input").value);
    formData.append('departure_airport', document.getElementById("departure-airport-input").value);
    formData.append('arrival_airport', document.getElementById("arrival-airport-input").value);
    formData.append('price', document.getElementById("price").value);
    formData.append('departure_time', document.getElementById("departure-date").value);
    formData.append('arrival_time', document.getElementById("arrival-date").value);
    console.log(document.getElementById("airplane-input").value)
    try {
    const result = axios.post(`http://localhost/flight-agency-project/backend/add-flight.php`, formData)
        .then(response => {
            console.log(formData)
            if (response.data.status == "success"){
                alert("Flight added successfully.")

            }else{
                alert("Failed to add flight, please try again.")
            };
        })
    }catch (error) {
        console.log(error);
        }
    }

addButton.addEventListener('click', () => {
    addFlight()
})