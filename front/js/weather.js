const API_KEY ="ad7a1a8862c6db332c00ae0931b9e47e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;

    });    
    
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
onGeoOk()