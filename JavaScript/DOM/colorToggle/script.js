let box = document.getElementById("box")
let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
let yellow = document.getElementById("yellow")
let btn = document.getElementById("btn")
let toggleColor = 0;
// red.addEventListener("click", () => {
//     box.style.backgroundColor = "red"
// })
// blue.addEventListener("click", () => {
//     box.style.backgroundColor = "blue"
// })
// green.addEventListener("click", () => {
//     box.style.backgroundColor = "green"
// })
// yellow.addEventListener("click", () => {
//     box.style.backgroundColor = "yellow"
// })
btn.addEventListener("click", () => {
    if(toggleColor == 0){
        box.style.backgroundColor = "Black"
        toggleColor = 1;
    }else{
        box.style.backgroundColor = "Bisque"
        toggleColor = 0
    }
})