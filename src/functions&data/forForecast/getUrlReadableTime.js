export const getUrl = (obj) => {
    return 'http://openweathermap.org/img/wn/'+obj.weather[0].icon+'@2x.png'
}

export const getReadableTime = (unix_timestamp, type) => {
    const date = new Date(unix_timestamp * 1000)
    if(type === 'hourly')
        return date.toLocaleTimeString()
    else
        return date.toLocaleDateString()
}
