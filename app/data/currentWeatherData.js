import fetch from 'node-fetch'

const currentWeather = {

    async getCurrentWeather(city) {
        const apikey = process.env.apikey
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

        try {
        const response = await fetch(apiUrl + city + `&appid=${apikey}`)

        const weather = await response.json()

        return weather
    } catch(error) {
        console.error(error);
        throw error;
    }
    },

    async getLatLongfromCountryCode(city, countryCode) {
        const apikey = process.env.apikey
        const apiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='

        try {
        const response = await fetch(apiUrl + city + ',' + countryCode + `&appid=${apikey}`)

        const cityLatLong = await response.json()

        return cityLatLong
        } catch(error) {
            console.error(error);
            throw error;
        }

    },

    async getAllWeather(lat, lon) {
        const apikey = process.env.apikey
        const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`

        try {
        const response = await fetch(apiUrl);
        const weatherData = await response.json();

        return weatherData
    } catch(error) {
        console.error(error);
        throw error;
    }
    },


    

}

export { currentWeather }