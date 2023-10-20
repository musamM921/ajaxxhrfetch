function showCountries() {
   let xhr =  new XMLHttpRequest()

   xhr.open('GET', 'https://restcountries.com/v3.1/all', true)

   xhr.onload = function() {
    if (xhr.status == 200) {
        console.log('sucsess')
    }
   }
   xhr.send()
}