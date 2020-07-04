export const locationOnClick = async (onLoc, wait) => {
    wait(true)
    let location = await getLocation()
    if(location === undefined || location.coords === undefined || location === 'ERROR') {
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
    wait(false)
}

const getLocation = () => {
    return new Promise((resolve, reject) => {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition(
                position => { resolve(position.coords) },
                error => { reject(error) },
                {timeout: 60000}
            )
        else
            reject('Geolocation is not supported by this browser')
    }).then(res => res
    ).catch(err => {
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
            return 'ERROR'
        })
}