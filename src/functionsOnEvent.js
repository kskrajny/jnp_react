const searchCityByName = (nameToSearch) => {
    return (elem) => (nameToSearch === elem.name)
}

const getWeather = async (cities, nameToSearch, type) => {
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
            console.log(err)
            return 'ERROR'
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

export const cityOnClick = async (cities, props, city, setStateOfWaiting) => {
    setStateOfWaiting(true)
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    let data = undefined

    for(const elem of props.history)
        if (elem.city === city && elem.type === type)
            data = elem.weatherData
    if (data === undefined)
        data = await getWeather(cities, city, type)
    if (data === 'ERROR') {
        props.changeWeather({
            type: 'ERROR',
            payload: {
                history: props.history,
                city: undefined,
                weatherData: undefined,
                type: undefined
            }
        })
        setStateOfWaiting(false)
    } else {
        props.history.push({
            city: city,
            weatherData: data,
            type: type
        })
        props.changeWeather({
            type: "NEW_WEATHER",
            payload: {
                history: props.history,
                city: city,
                weatherData: data,
                type: type
            }
        })
        setStateOfWaiting(false)
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
        console.log(err)
        return 'ERROR'
    })
}

export const locationOnClick = async (cities, props, setStateOfWaiting) => {
    setStateOfWaiting(true)
    let location = await getLocation()
/* used to test with given coords
    test with given coords
    let location = {}
    location.coords = {}
    location.coords.lon = 21
    location.coords.lat = 52.2
*/
    if(location === undefined || location.coords === undefined) {
        console.log(location.coords)
        props.changeWeather({type: "ERROR"})
        setStateOfWaiting(false)
        return
    } else {
        const typeElem = document.getElementById('type')
        const type = typeElem.options[typeElem.selectedIndex].value
        const name = 'lat:' + location.coords.lat + '  lon:' + location.coords.lon
        let obj = await getWeatherByCoords(location.coords.lat, location.coords.lon, type)
        if(obj === undefined) {
            props.changeWeather({type: "ERROR"})
            setStateOfWaiting(false)
            return
        }
        props.history.push({
            city: name,
            weatherData: obj,
            type: type
        })
        props.changeWeather({
            type: "NEW_WEATHER",
            payload: {
                history: props.history,
                city: name,
                weatherData: obj,
                type: type
            }
        })
        setStateOfWaiting(false)
    }
}

export const getReadableTime = (unix_timestamp, type) => {
    const date = new Date(unix_timestamp * 1000)
    if(type === 'hourly')
        return date.toLocaleTimeString()
    else
        return date.toLocaleDateString()
}

