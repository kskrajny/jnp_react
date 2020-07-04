import { cities } from '../consts'

const searchCityByName = (nameToSearch) => {
    return (elem) => (nameToSearch === elem.name)
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

const getWeatherByCoords = async (lat, lon, type) => {
    const counterType = (type === 'hourly') ? 'daily' : 'hourly'
    return await fetch('https://api.openweathermap.org/data/2.5/' +
        'onecall?lat=' + lat + '&lon=' + lon + '&exclude=current,minutely,' +
        counterType + '&appid=4bf9ca8e75181f37d0ae3b94bc24c530&units=metric')
        .then((res) => res.json())
        .catch(err => {
                console.log(err)
                return 'ERROR'
        })
}

export const cityOnClick = async (history, onName) => {
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
}

const getLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => { resolve(position.coords) },
            error => { reject(error) },
            {timeout: 10000}
        )
    }).then(res => {
        res.json()
    }).catch(err => {
        return 'ERROR'
    })
}

export const locationOnClick = async (onLoc) => {
    let location = await getLocation()
/* used to test with given coords
    test with given coords
    let location = {}
    location.coords = {}
    location.coords.lon = 21
    location.coords.lat = 52.2
*/
    if(location === undefined || location.coords === undefined) {
        //console.log(location.coords)
        onLoc('ERROR')
    } else {
        const typeElem = document.getElementById('type')
        const type = typeElem.options[typeElem.selectedIndex].value
        const name = 'lat:' + location.coords.lat + '  lon:' + location.coords.lon
        let data = await getWeatherByCoords(location.coords.lat, location.coords.lon, type)
        if (data === undefined) onLoc('ERROR')
        onLoc({
            city: name,
            weatherData: data,
            type: type
        })
    }
}

