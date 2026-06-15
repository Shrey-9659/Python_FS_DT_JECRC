// setTimeout(callbackFunction, timeinMS)

// setTimeout(() => {

// }, 1000)

// let changeName = setTimeout(() => {
//     console.log("Hello World")
// }, 2000)
// let changeName1 = setTimeout(() => {
//     console.log("Hello World 1")
// }, 3000)
// let changeName2 = setTimeout(() => {
//     console.log("Hello World 2")
// }, 4000)

// clearTimeout(reference)
// clearTimeout(changeName1)

let heading = document.getElementById("heading")
let btn = document.getElementById("btn")
let stop = document.getElementById("stop")
let changeText;

btn.addEventListener("click", () => {
    changeText = setTimeout(() => {
        heading.innerHTML = "Welcome to JECRC Foundation"
    }, 2000)
})

stop.addEventListener("click", () => {
    clearTimeout(changeText)
})