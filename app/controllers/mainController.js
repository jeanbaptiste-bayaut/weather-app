import { currentWeather } from '../data/currentWeatherData.js';
import { weatherIcons } from '../data/weatherIcons.js';
import { countryCodes } from '../data/countryCodes.js';
import { EagerLoadingError } from 'sequelize';

const mainController = {

    index (req, res) {
        res.render('login')
    },

    forecastHome(req, res) {
        const countries = countryCodes
        console.log(typeof countries);
        res.render('forecast', {
            countries,
        } )
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
    },

    async showWeatherCity(req, res) {
        const { city } = req.params
        console.log('ici', city);
        const country_code = 'fr'

        const cityWeather = await currentWeather.getCurrentWeather(city)
        const cityLatLong = await currentWeather.getLatLongfromCountryCode(city, country_code)

        const lat = cityLatLong[0].lat
        const lon = cityLatLong[0].lon
        const allWeather = await currentWeather.getAllWeather(lat, lon)

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

export { mainController }

