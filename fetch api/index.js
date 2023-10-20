function showCountries() {
   let xhr =  new XMLHttpRequest()

   xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

   xhr.onload = function() {
    if (xhr.status == 200) {
        console.log('sucsess')
        let countries = JSON.parse(this.response)
        console.log(countries)
        countries.forEach(country => {
           const countryCard = document.createElement('div')
            countryCard.innerHTML = country.name
        })
    }
   }
   xhr.send()
}