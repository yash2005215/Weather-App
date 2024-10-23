let input = document.querySelector(".search input");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value.toLowerCase()}&appid=a024d235928f6d8756be733ffd4425f9&units=metric`;
    const response = await fetch(apiUrl);
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;    
    document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;
    document.querySelector(".weather-img").src = `${data.weather[0].main}.png`;
});