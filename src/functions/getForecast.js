import { getWeatherFromApi } from './getWeatherFromApi/getWeatherFromApi';
import { fromWeatherDataToNEW_FORECAST } from "./toNEW_FORECAST/fromWeatherDataToNEW_FORECAST";
import { fromForecastToNEW_FORECAST } from "./toNEW_FORECAST/fromForecastToNEW_FORECAST";

export const getForecast = async (history) => {
    const city = document.querySelector('input').value
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    for(const forecast of history)
        if (forecast.city === city && forecast.type === type)
            return fromForecastToNEW_FORECAST(forecast)
    let weatherData = await getWeatherFromApi(city, type)
    if(weatherData === 'ERROR') return {type: 'ERROR'}
    return await fromWeatherDataToNEW_FORECAST({ history, city, weatherData, type })
}