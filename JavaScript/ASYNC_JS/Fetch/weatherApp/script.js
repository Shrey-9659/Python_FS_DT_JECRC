let city = document.getElementById("city")
let submit = document.getElementById("submit")
let celcius = document.getElementById("celcius")
let far = document.getElementById("far")
let condition = document.getElementById("condition")

submit.addEventListener("click", () => {
    let weatherApi = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`

    fetch(weatherApi)
    .then(rawData => rawData.json())
    .then(response => {
        celcius.innerText = response.current.temp_c
        far.innerText = response.current.temp_f
        condition.innerText = response.current.condition.text
    })
})

