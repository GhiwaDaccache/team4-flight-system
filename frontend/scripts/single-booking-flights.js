const urlParams = new URLSearchParams(window.location.search);
const booking_id = urlParams.get('booking_id');
console.log(booking_id);

const backendBaseURL = "http://localhost/flight-agency-project/backend/";

async function fetchFlights() {
    const url = backendBaseURL + "get-flights.php";

    const data = new FormData();
    data.append("booking_id", booking_id);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(response => {
            return response.json();
        })
        .then(flights => {
            console.log('then reached (processing flights):');
            renderFlightCards(flights);
        })
        .catch(error => {
            console.error('Error fetching flights:', error);
        });
}

function renderFlightCards(flights) {
    const flightCardsContainer = document.getElementById('flight-cards-container');
    flightCardsContainer.innerHTML = '';

    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.classList.add('flight-card', 'border-radius', 'shadow', 'flex', 'row', 'justify-between');

        const flightDetails = document.createElement('div');
        flightDetails.classList.add('flight-details','flex','start','gap','column');

        flightDetails.innerHTML = `
        <div class="flex center gap row">
      <h2>Departure</h2>
      <p><span class="label">Date:</span> ${flight.departure_date.slice(0, 10)}</p>
      <p><span class="label">Time:</span> ${flight.departure_date.slice(11, 16)}</p></div>
      <div class="flex center gap row">
      <h2>Arrival</h2>
      <p><span class="label">Date:</span> ${flight.arrival_date.slice(0, 10)}</p>
      <p><span class="label">Time:</span> ${flight.arrival_date.slice(11, 16)}</p></div>
      </div>
    `;

        const airplaneInfo = document.createElement('div');
        airplaneInfo.classList.add('airplane-info');

        airplaneInfo.innerHTML = `
      <h2>Airplane Details</h2>
      <p><b>Airline:</b> ${flight.airline || 'Loading...'}</p>
      <p><b>Model:</b> ${flight.model || 'Loading...'}</p>
    `;

        flightCard.appendChild(flightDetails);
        flightCard.appendChild(airplaneInfo);

        flightCardsContainer.appendChild(flightCard);
    });
}

fetchFlights();