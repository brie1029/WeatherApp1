function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3bddcf4o5cba4b6ddt08f37131006903";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New York&key=3bddcf4o5cba4b6ddt08f37131006903&unints=imperial";

axios.get(apiUrl).then(displayTemperature);
