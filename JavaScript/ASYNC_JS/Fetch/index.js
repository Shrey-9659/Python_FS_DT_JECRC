let API = "https://jsonplaceholder.typicode.com/users"
let randomQuoteApi = "http://quotable.io/random"
fetch(API)
.then((data) => {
    return data.json()
})
.then((value) => {
    value.map((singleUser) => {
        console.log(singleUser.name)
    })
})
.catch((error) => {
    console.log(error)
})