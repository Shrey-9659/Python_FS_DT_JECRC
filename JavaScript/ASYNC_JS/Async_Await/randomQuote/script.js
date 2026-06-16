let quote = document.getElementById("quote")
let btn = document.getElementById("btn")
let api = "http://quotable.io/random"

// btn.addEventListener("click", () => {
//     fetch(api)
//     .then(rawData => rawData.json())
//     .then((response) => {
//         quote.innerText = response.content
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })
btn.addEventListener("click", async () => {
    try {
        let rawData = await fetch(api)
        let response = await rawData.json()
        quote.innerText = response.content
    } catch (error) {
        console.log(error)
    }
})


