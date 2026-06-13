let count = document.getElementById("count")
let inc = document.getElementById("inc")
let dec = document.getElementById("dec")
let reset = document.getElementById("reset")

inc.addEventListener("click", () => {
    num = parseInt(count.innerHTML)
    count.innerHTML = `${num + 1}`
})

dec.addEventListener("click", () => {
    num = parseInt(count.innerHTML)
    if(num > 0){
        count.innerHTML = num - 1
    }
})

reset.addEventListener("click", () => {
    count.innerHTML = "0";
})
