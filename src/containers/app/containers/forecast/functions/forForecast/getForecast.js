import { getWeatherFromApi } from './getWeatherFromApi';
import { toForecastAndTenor } from "./toForecastAndTenor";
import { fromForecastToAll } from "./fromForecastToAll";

export const getForecast = async (history) => {
    const city = document.querySelector('input').value
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    for(const forecast of history)
        if (forecast.city === city && forecast.type === type)
            return fromForecastToAll(forecast)
    let weatherData = await getWeatherFromApi(city, type)
    if(weatherData === 'ERROR') return {type: 'ERROR'}
    return await toForecastAndTenor({ history, city, weatherData, type })
}