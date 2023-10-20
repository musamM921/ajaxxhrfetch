// Простой запрос к серверу JSONPlaceholder
const requestURL = 'https://jsonplaceholder.typicode.com/users'

const xhr = new XMLHttpRequest()

xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    } else {
        console.log(xhr.response)
    }
    console.log(JSON.parse(xhr.response))
    //второй метод
    //xhr.responseType = 'json'
}

xhr.onerror = () => {
    console.log(xhr.response)
}
xhr.open('GET', requestURL)

xhr.send()