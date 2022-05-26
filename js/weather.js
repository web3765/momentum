
const API_KEY = "224d998291343de02c8844b2b82ea2da";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;   
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    // JS가 url을 부른다.
    // json : url로 얻어오는 정보 전부를 가리킨다.
    fetch(url).then((response) => response.json())
    .then((data) => {

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
  
        city.innerText = `@ ${data.name}`; 
        // String 합하기 위해 `(백틱) 사용
        weather.innerText = `${Math.floor(data.main.temp)}°C  ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
