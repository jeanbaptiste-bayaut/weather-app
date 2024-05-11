const currentWeather = require('../data/currentWeatherData');
const weatherIcons = require('../data/weatherIcons')

const mainController = {

    index (req, res) {
        res.render('home')
    },

    async showWeather(req, res) {
        const { city } = req.body
        const cityWeather = await currentWeather.getCurrentWeather(city)

        const weatherIcon = cityWeather.weather[0].main.toLowerCase()

        const icon = weatherIcons.find(elt => elt.type.toLowerCase() === weatherIcon)
        console.log(cityWeather);

        res.render('city', {
            cityWeather,
            icon
        })
    }
}

module.exports = mainController

