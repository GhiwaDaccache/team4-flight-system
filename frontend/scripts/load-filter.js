const fromInput = document.getElementById("from-input");
const toInput = document.getElementById("to-input");

axios.get(`http://localhost/Team 4 - flight system/backend/load-filter.php`)
  .then(response => {
    const airports = response.data.airports;
    airports.forEach(element => {
        fromInput.innerHTML += `<option id="${element.id}">${element.code} - ${element.country}</option>`
        toInput.innerHTML += `<option id="${element.id}">${element.code} - ${element.country}</option>`
        });
    });