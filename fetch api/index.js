function showCountries() {
   let xhr =  new XMLHttpRequest()

   xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

   xhr.send()
}