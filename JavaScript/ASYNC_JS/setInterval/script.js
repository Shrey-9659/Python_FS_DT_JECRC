// setInterval(classbackFunction, timeinMS)

// let printName = setInterval(() => {
//     console.log("Hello world")
// }, 1000)

// setTimeout(() => {
//     clearInterval(printName)
// }, 5000)


let timer = document.getElementById("timer")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let time = 1
let myTimer;
let isStartActive = false

start.addEventListener("click", () => {
    if(isStartActive == false){
        isStartActive = true
    myTimer = setInterval(() => {
        timer.innerHTML = `Timer : ${time++}`
    },1000)
}
})

stop.addEventListener("click", () => {
    clearInterval(myTimer)
    isStartActive = false
})

reset.addEventListener("click", () => {
    timer.innerHTML = "Timer : 0"
    clearInterval(myTimer)
    time = 1;
    isStartActive = false
})