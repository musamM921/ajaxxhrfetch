function showCountries() {
   let xhr =  new XMLHttpRequest()

   xhr.open('GET', 'https://restcountries.com/v3.1/all', true)
   xhr.onload = function() {
    if (xhr.status == 200) {
        console.log('sucсess')
        let countries = JSON.parse(this.response)
        console.log(countries)

        countries.forEach(country => {
            const countryCard = document.createElement('div');
            const countryCardImage = document.createElement('img');
        
            const countryName = country.name.common;
            const flagURL = country.flags.png;
        
            countryCard.innerHTML = countryName;
            countryCardImage.src = flagURL;
            countryCard.appendChild(countryCardImage);
            document.getElementById('feed').appendChild(countryCard);
        });
    }
   }
   xhr.send()
}