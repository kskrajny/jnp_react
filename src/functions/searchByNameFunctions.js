import {cities} from "./consts";

export const cityOnClick = async (history, onName, wait) => {
    wait(true)
    const city = document.querySelector('input').value
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    let data = undefined
    for(const elem of history)
        if (elem.city === city && elem.type === type)
            data = elem.weatherData
    if (data === undefined)
        data = await getWeather(city, type)
    if (data === 'ERROR') {
        onName('ERROR')
    } else {
        onName({
            city: city,
            weatherData: data,
            type: type
        })
    }
    wait(false)
}

const getWeather = async (nameToSearch, type) => {
    const cityData = cities.find(searchCityByName(nameToSearch))
    const counterType = (type === 'hourly') ? 'daily' : 'hourly'
    if(cityData === undefined) return undefined
    const lat = cityData.coord.lat
    const lon = cityData.coord.lon
    return fetch('https://api.openweathermap.org/data/2.5/' +
        'onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,' +
        counterType + '&appid=4bf9ca8e75181f37d0ae3b94bc24c530&units=metric')
        .then((res) => res.json())
        .catch(err => {
            throw new Error()
        })
}

const searchCityByName = (nameToSearch) => {
    return (elem) => (nameToSearch === elem.name)
}