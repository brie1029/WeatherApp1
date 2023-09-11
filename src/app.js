function displayTemperature(response {
    console.log(response.data.temperature.current);
})


let apiKey = "3bddcf4o5cba4b6ddt08f37131006903";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New York&key=${apiKey}&units=metric`;

axios.get(apiUrl).tehn(displayTemperature);