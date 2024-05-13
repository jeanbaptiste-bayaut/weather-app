const currentWeather = require('../data/currentWeatherData');
const weatherIcons = require('../data/weatherIcons')
const countryCodes = require('../data/countryCodes')

const mainController = {

    index (req, res) {
        res.render('home')
    },

    async showWeather(req, res) {
        const { city, country_code } = req.body
        const cityWeather = await currentWeather.getCurrentWeather(city)
        const cityLatLong = await currentWeather.getLatLongfromCountryCode(city, country_code)

        const lat = cityLatLong[0].lat
        const lon = cityLatLong[0].lon
        const allWeather = await currentWeather.getAllWeather(lat, lon)

        console.log(allWeather.hourly);

        const weatherIcon = cityWeather.weather[0].main.toLowerCase()

        res.locals.weatherIcons = weatherIcons

        const icon = weatherIcons.find(elt => elt.type.toLowerCase() === weatherIcon)
        console.log(cityWeather);

        res.render('city', {
            cityWeather,
            icon,
            countries: countryCodes,
            allWeather
        })
    }
}

module.exports = mainController

