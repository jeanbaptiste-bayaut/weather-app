const apikey = '4e91f79aa0da851077b37cc931e6f94a'

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const descriptions = [
    { "description": "Clear sky", "icon": "fa-sun" },
    { "description": "Few clouds", "icon": "fa-cloud-sun" },
    { "description": "Cloudy", "icon": "fa-cloud" },
    { "description": "Overcast", "icon": "fa-cloud" },
    { "description": "Overcast clouds", "icon": "fa-cloud" },
    { "description": "Light rain", "icon": "fa-cloud-showers-heavy" },
    { "description": "Moderate rain", "icon": "fa-cloud-rain" },
    { "description": "Heavy rain", "icon": "fa-cloud-showers-heavy" },
    { "description": "Showers", "icon": "fa-cloud-showers-heavy" },
    { "description": "Light snow", "icon": "fa-snowflake" },
    { "description": "Moderate snow", "icon": "fa-snowflake" },
    { "description": "Heavy snow", "icon": "fa-snowflake" },
    { "description": "Thunderstorms", "icon": "fa-bolt" },
    { "description": "Fog", "icon": "fa-smog" },
    { "description": "Hail", "icon": "fa-cloud-hail" },
    { "description": "Strong wind", "icon": "fa-wind" }
  ]

const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    let data = await response.json()
    console.log(data);

    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').textContent = `${Math.round(data.main.temp)}°c`;
    document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
    document.querySelector('.wind').textContent = `${data.wind.speed} km/h`;

    const weatherDescription = data.weather[0].description
    console.log(weatherDescription);

    const checkIcon = descriptions.find(elt => elt.description.toLocaleLowerCase() === weatherDescription)

    const iconToDisplay = checkIcon.icon;
    
    document.querySelector('.weather-icon').classList.remove('fa-rain')
    document.querySelector('.weather-icon').classList.add(iconToDisplay)
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchInput.value)
})