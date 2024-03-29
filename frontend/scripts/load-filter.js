const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");

axios.get(`http://localhost/flight-agency-project/backend/load-filter.php`)
  .then(response => {
    const airports = response.data.airports;
    airports.forEach(element => {
        fromInput.innerHTML += `<option value="${element.id}">${element.code} - ${element.country}</option>`
        toInput.innerHTML += `<option value="${element.id}">${element.code} - ${element.country}</option>`
        });
    });