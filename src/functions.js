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
        counterType + '&appid=4bf9ca8e75181f37d0ae3b94bc24c530')
        .then((res) => res.json())
}

export const cityOnClick = async (cities, props) => {
    const city = document.getElementById('city').value
    const typeElem = document.getElementById('type')
    const type = typeElem.options[typeElem.selectedIndex].value
    let data;
    if(props.city !== city || props.type != type)
        data = await getWeather(cities, city, type)
    else
        data = props.weatherData
    props.changeWeather({
        type: "NEW_WEATHER",
        payload: {
            city: city,
            weatherData: data,
            type: type,
        }
    })
}

const getLocation = () => {
    return new Promise((resolve, reject) => {
        resolve('Not work')
    })
    /*
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => { resolve(position.coords) },
            error => { reject(error) },
            {timeout: 1000 * 60}
        )
    }).then(res => res).catch(error => error)
    */
}

export const locationOnClick = async (props) => {
    let location = await getLocation()
    if(location === undefined) {
        props.changeWeather({type: "LOC_ERROR"})
    } else {
        props.changeWeather({type: "LOC_ERROR"})
    }
}

export const getReadableTime = (unix_timestamp, type) => {
    const date = new Date(unix_timestamp * 1000)
    if(type === 'hourly')
        return date.toLocaleTimeString()
    else
        return date.toLocaleDateString()
}