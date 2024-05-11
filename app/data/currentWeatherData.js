const currentWeather = {

    async getCurrentWeather(city) {
        const apikey = '4e91f79aa0da851077b37cc931e6f94a'
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

        const response = await fetch(apiUrl + city + `&appid=${apikey}`)

        const weather = await response.json()

        return weather
    }

}

module.exports = currentWeather