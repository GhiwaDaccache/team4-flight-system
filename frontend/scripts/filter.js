const searchButton = document.getElementById("search-btn");
const resultsSection = document.getElementById("results");
const resultsTitle = document.getElementById("results-title");
const adsSection = document.getElementById("ads-section");
const adsTitle = document.getElementById("ads-title");


searchButton.addEventListener('click', ()=>{
    const fromInput = document.getElementById("from-input");
    const toInput = document.getElementById("to-input");
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const waysInput = document.getElementById("type-input")
    
    const airportFrom = fromInput.options[fromInput.selectedIndex].value;
    const airportTo = toInput.options[toInput.selectedIndex].value;
    const ways = waysInput.options[waysInput.selectedIndex].value;

    adsSection.classList.add("hidden")
    adsTitle.classList.add("hidden")
    resultsSection.classList.remove("hidden")
    resultsTitle.classList.remove("hidden")



    axios.get(`http://localhost/Team 4 - flight system/backend/filter.php?from_airport=${airportFrom}&to_airport=${airportTo}&departure_date=${departureDate}&return_date=${returnDate}`)
  .then(response => {
        if(ways == "One way"){
          const flights = response.data.flights;
          console.log(flights)
          resultsSection.innerHTML = '';
          flights.forEach(element => {
            
            let deprt_date = moment(element.departure_date).format('YYYY-MM-DD HH:mm')
            let arriv_date = moment(element.arrival_date).format('YYYY-MM-DD HH:mm')
            resultsSection.innerHTML += `<div class="booking-card flex justify-between ">
            <div>
                <i class="fa-solid fa-plane-departure"></i>
            </div>
            <div>
                <p>${deprt_date} - ${arriv_date} </p>
            </div>
            <div>
                <p>Non stop</p>
            </div>
            <div>
                <p>${element.code} - ${element.country}</p>
            </div>
            <div class="line"></div>
            <div>
                <p>${element.price}</p>
                <p>Economy</p>
                <button class="btn-style btn" id="flight-btn">Learn more</button>
            </div>
        </div>`  

          




              });

        }
    });

})