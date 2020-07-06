import { cities } from '../../const'

export const getWeatherFromApi = async (nameToSearch, type) => {
    const cityData = cities.find((elem) => (nameToSearch === elem.name))
    const counterType = (type === 'hourly') ? 'daily' : 'hourly'
    if(cityData === undefined) return 'ERROR'
    const lat = cityData.coord.lat
    const lon = cityData.coord.lon
    return fetch('https://api.openweathermap.org/data/2.5/' +
        'onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,' +
        counterType + '&appid=4bf9ca8e75181f37d0ae3b94bc24c530&units=metric')
        .then((res) => res.json())
        .catch(() => 'ERROR')
}