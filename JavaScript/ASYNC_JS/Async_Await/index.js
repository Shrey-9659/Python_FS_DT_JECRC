// let API = "https://jsonplaceholder.typicode.com/users"
// let randomQuoteApi = "http://quotable.io/random"
// fetch(API)
// .then((data) => {
//     return data.json()
// })
// .then((value) => {
//     value.map((singleUser) => {
//         console.log(singleUser.name)
//     })
// })
// .catch((error) => {
//     console.log(error)
// })


let API = "https://jsonplacesdkvdssjkbsewkholder.typicode.com/users"
let randomQuoteApi = "http://quotable.io/random"
async function fetchData(){
try{
    let rawData = await fetch(API)
    let response = await rawData.json()
    response.map((singleUser) => {
        console.log(singleUser.name)
    })  
}catch(error){
    console.log("Api galat hai")
}
}
// .then((data) => {
//     return data.json()
// })
// .then((value) => {
//     value.map((singleUser) => {
//         console.log(singleUser.name)
//     })
// })
// .catch((error) => {
//     console.log(error)
// })
// }
fetchData()