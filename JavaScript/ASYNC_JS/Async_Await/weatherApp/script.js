let city = document.getElementById("city");
let submit = document.getElementById("submit");
let celcius = document.getElementById("celcius");
let far = document.getElementById("far");
let condition = document.getElementById("condition");

submit.addEventListener("click", async () => {
  let weatherApi = `https://api.weatherapi.com/v1/current.json?key=e884e49500a94e69811163154241309&q=${city.value}`;
  try {
    let rawData = await fetch(weatherApi);
    let response = await rawData.json();
    celcius.innerText = response.current.temp_c;
    far.innerText = response.current.temp_f;
    condition.innerText = response.current.condition.text;
  } catch (error) {
    console.log(error);
  }
});
