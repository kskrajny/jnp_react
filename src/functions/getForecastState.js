import React from "react";
import Scroll from "react-scroll";
import {send_share} from "./tenorFunctions";
const Element = Scroll.Element;

export const getForecastState = (state) => ({
    city: getCity(state),
    boxes: getBoxes(state),
    data: getData(state)
})


const getCity = state => {
    return (state.weatherData === undefined) ? undefined : state.city;
}

const getBoxes = state => {
    if(state.weatherData === undefined) return undefined
    return state.weatherData[state.type].map(obj => (
        <Element key={obj.dt}>
            <p>{getReadableTime(obj.dt, state.type)}</p>
            <img src={getUrl(obj)} alt="icon"/>
        </Element>
    ))
}

export const getUrl = (obj) => {
    return 'http://openweathermap.org/img/wn/'+obj.weather[0].icon+'@2x.png'
}

const getReadableTime = (unix_timestamp, type) => {
    const date = new Date(unix_timestamp * 1000)
    if(type === 'hourly')
        return date.toLocaleTimeString()
    else
        return date.toLocaleDateString()
}

const getData = state => {
    if(state.weatherData === undefined) return undefined
    /* check if weather will be nice */
    /* points */
    let rain = 1
    let temp = 1
    let avg = 1
    /* helpful data */
    let avgTemp
    let sumTemp = 0
    let numberOfTemps = 0
    let minTemp = 50
    let maxTemp = -50
    /* descriptions of weather */
    let descOfWet = []
    // eslint-disable-next-line
    state.weatherData[state.type].map(obj => {
        if (obj.weather[0].main === 'Rain') rain = 0
        descOfWet.push(obj.weather[0].description)
        if (state.type === 'hourly') {
            let t = parseFloat(obj.temp)
            if (t < 15 || t > 30) temp = 0
            sumTemp += t
            numberOfTemps++
            minTemp = (minTemp > t) ? t : minTemp
            maxTemp = (maxTemp < t) ? t : maxTemp
        }
        if (state.type === 'daily') {
            let tMin = parseFloat(obj.temp.min)
            let tMax = parseFloat(obj.temp.max)
            let tDay = parseFloat(obj.temp.day)
            let tNight = parseFloat(obj.temp.night)
            if (tMin < 15 || tMax > 30)
                temp = 0
            sumTemp += tDay + tNight
            numberOfTemps += 2
            minTemp = (minTemp > tMin) ? tMin : minTemp
            maxTemp = (maxTemp < tMax) ? tMax : maxTemp
        }
    })
    avgTemp = sumTemp / numberOfTemps
    if (avgTemp < 18 || avgTemp > 25) avg = 0
    let pts = avg + temp + rain
    let weatherComment
    switch (pts) {
        case 3:
            weatherComment = 'nice'
            break
        case 2:
            weatherComment = 'passable'
            break
        default:
            weatherComment = 'not nice'
            break
    }
    descOfWet = [...new Set(descOfWet)]
    if (descOfWet.len === 0)
        descOfWet.push('pusty')
    send_share(descOfWet)
    return {
        weatherComment: weatherComment,
        avgTemp: avgTemp.toFixed(2),
        minTemp: minTemp.toFixed(2),
        maxTemp: maxTemp.toFixed(2)
    }
}