const currentWeather = {

    async getCurrentWeather(city) {
        const apikey = '4e91f79aa0da851077b37cc931e6f94a'
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

        const response = await fetch(apiUrl + city + `&appid=${apikey}`)

        const weather = await response.json()

        return weather
    },

    async getLatLongfromCountryCode(city, countryCode) {
        const apikey = '4e91f79aa0da851077b37cc931e6f94a'
        const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='

        const response = await fetch(apiUrl + city + ',' + countryCode + `&appid=${apikey}`)

        const cityLatLong = await response.json()

        return cityLatLong

    },

    async getAllWeather(lat, lon) {
        const apikey = '4e91f79aa0da851077b37cc931e6f94a'
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`

        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        return weatherData
    },


    

}

export { currentWeather }