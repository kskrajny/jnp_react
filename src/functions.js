const searchCityByName = (nameToSearch) => {
    return (elem) => (nameToSearch === elem.name)
}

export const getWeather = async (cities, nameToSearch) => {
    const cityData = cities.find(searchCityByName(nameToSearch))
    if(cityData === undefined) return undefined
    const lat = cityData.coord.lat
    const lon = cityData.coord.lon
    return fetch('https://api.openweathermap.org/data/2.5/' +
        'onecall?lat='+lat+'&lon='+lon+'&appid=4bf9ca8e75181f37d0ae3b94bc24c530')
        .then((res) => res.json())
}

export const getLocation = () => {
    return 'Doesnt work yet'
    /*
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => { resolve(position.coords) },
            error => { reject(error) }
        )
    }).catch(error => error)
    */
}
