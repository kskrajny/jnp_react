import { getWeatherFromApi } from './getWeatherFromApi';
import { toForecastAndTenor } from "./toForecastAndTenor";

export const getForecast = async (history) => {
    const city = document.querySelector('input').value
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    let weatherData = undefined
    for(const elem of history)
        if (elem.city === city && elem.type === type)
            weatherData = elem.weatherData
    if (weatherData === undefined)
        weatherData = await getWeatherFromApi(city, type)
    return await toForecastAndTenor({ history, city, weatherData, type })
}