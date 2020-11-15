const loadCountryName = (resultDiv) => {
    fetch('http://localhost:8080/random-country')
    .then(response => response.json())
    .then(result => {
        resultDiv.innerHTML = `<h2>${result.country_name}</h2>`;
    }); 
}; 