// Selecting the element
// let one = document.getElementById("one")
// let two = document.getElementsByClassName("first")
// let three = document.getElementsByTagName("h1")
// let four = document.querySelector(".first")
// let five = document.querySelectorAll(".first")
let heading = document.getElementById("heading")
let btn = document.getElementById("btn")


// Getting the value
console.log(heading.innerHTML)

// Setting the value
// heading.innerHTML = "Welcome to JECRC Foundation"

// Add event listeners
btn.addEventListener("click", () => {
    heading.innerHTML = "Welcome to JECRC Foundation"
})