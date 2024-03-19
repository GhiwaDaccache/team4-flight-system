const searchButton = document.getElementById("search-btn");
const resultsSection = document.getElementById("results");
const resultsTitle = document.getElementById("results-title");
const adsSection = document.getElementById("ads-section");
const adsTitle = document.getElementById("ads-title");
let waysInput = document.getElementById("type-input");
const returnDate = document.getElementById("return-date");
let ways = waysInput.options[waysInput.selectedIndex].value;

waysInput.addEventListener('change', ()=>{
  ways = waysInput.options[waysInput.selectedIndex].value;
  if(ways == "One way"){
    returnDate.disabled = true;
  }
  else{
    returnDate.disabled = false;
  }
})



searchButton.addEventListener('click', ()=>{
    const fromInput = document.getElementById("from-input");
    const toInput = document.getElementById("to-input");
    const departureDate = document.getElementById("departure-date").value;
    returnDate = document.getElementById("return-date").value;
    waysInput = document.getElementById("type-input")
    
    const airportFrom = fromInput.options[fromInput.selectedIndex].value;
    const airportTo = toInput.options[toInput.selectedIndex].value;
    ways = waysInput.options[waysInput.selectedIndex].value;

    adsSection.classList.add("hidden")
    adsTitle.classList.add("hidden")
    resultsSection.classList.remove("hidden")
    resultsTitle.classList.remove("hidden")



    axios.get(`http://localhost/Team 4 - flight system/backend/filter.php?from_airport=${airportFrom}&to_airport=${airportTo}&departure_date=${departureDate}&return_date=${returnDate}`)
  .then(response => {
        const flights = response.data.flights;
        resultsSection.innerHTML = '';
        if(ways == "One way"){

          flights.forEach(element => {
            
            let deprt_date = moment(element.departure_date).format('YYYY-MM-DD HH:mm')
            let arriv_date = moment(element.arrival_date).format('YYYY-MM-DD HH:mm')
            resultsSection.innerHTML += `<div class="booking-card flex justify-between align center ">
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
                <p>${element.departure_code} - ${element.arrival_code}</p>
            </div>
            <div class="line"></div>
            <div>
                <p>${element.price}</p>
                <p>Economy</p>
                <button class="btn-style btn" id="flight-btn">Learn more</button>
            </div>
        </div>`  

              });

        }else{
          flights.forEach(element => {
            
            let deprt_date = moment(element.departure_date).format('YYYY-MM-DD HH:mm')
            let arriv_date = moment(element.arrival_date).format('YYYY-MM-DD HH:mm')

            const matchedFlight = flights.filter(matchedItem => matchedItem.departure_code == element.arrival_code && matchedItem.arrival_code == element.departure_code);
            let foundFlight = matchedFlight[0]
            flights.splice(0, 1)

            let matched_deprt_date = moment(foundFlight.departure_date).format('YYYY-MM-DD HH:mm')
            let matched_arriv_date = moment(foundFlight.arrival_date).format('YYYY-MM-DD HH:mm')


            resultsSection.innerHTML += `<div class="booking-card flex justify-between ">
            <div>
                <i class="fa-solid fa-plane-departure"></i>
                <br>
                <br>
                <i class="fa-solid fa-plane-arrival"></i>
            </div>
            <div>
                <p>${deprt_date} - ${arriv_date}</p>
                <br>
                <p>${matched_deprt_date} - ${matched_arriv_date}</p>
            </div>
            <div>
                <p>Non stop</p>
                <br>
                <p>Non stop</p>

            </div>
            <div>
                <p>${element.departure_code} - ${element.arrival_code}</p>
                <br>
                <p>${foundFlight.departure_code} - ${foundFlight.arrival_code}</p>

            </div>
            <div class="line"></div>
            <div>
                <p>${element.price}</p>
                <p>Economy</p>
                <button class="btn-style btn" id="flight-btn">Learn more</button>
            </div>
        </div>`  
        });
    };

  })
})