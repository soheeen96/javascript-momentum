const API_KEY = "3c4048adfd76a7c40632dc68a668f4ba";
const weather = document.querySelector("#weather li:first-child");
const city = document.querySelector("#weather li:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp2 = Math.floor(data.main.temp);
      const weatherIcon = data.weather[0].icon;

      city.innerText = data.name;
      weather.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt=""> <span>${temp2}°C<span>`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you :(");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
