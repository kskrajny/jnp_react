export const cities = require('../city.list.json')

export const cityNames = [ ...new Set(cities.map(obj => {
    return obj.name
}))].sort()

export const division = (() => {
    let division = []
    let i = 0
    const diValue = 500
    while (i < cityNames.length) {
        let lastIndex = Math.min(i + diValue, cityNames.length)
        division.push({
            start: cityNames[i],
            end: cityNames[lastIndex - 1],
            table: cityNames.slice(i, lastIndex)
        })
        i += diValue
    }
    return division
})()

export const getMode = (mode) => {
    if(mode === 'LIGHT') {
        return {
            color: 'black',
            backgroundColor: 'white'
        }
    } else {
        return {
            color: 'grey',
            backgroundColor: '#282c34'
        }
    }
}

export const initialForecastState = {
    history: [],
    city: undefined,
    type: undefined,
    weatherData: undefined
}