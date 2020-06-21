import React from 'react';
import './Weather.css'
import { getReadableTime } from './functions'
import {send_share} from "./tenorFunctions";

const getImgCode = (obj) => {
    return obj.weather[0].icon
    //return props.state.weatherData[props.state.type][props.state.nr].weather[0].icon
}

const getUrl = (obj) => {
    return 'http://openweathermap.org/img/wn/'+getImgCode(obj)+'@2x.png'
}

function Weather(props) {
    if(props.state.weatherData === undefined)
        return <div className="Weather"> What do you want to see ? </div>

    const boxes = () => {
        return props.state.weatherData[props.state.type].map(obj => (
            <div key={obj.dt}>
                <p>{getReadableTime(obj.dt, props.state.type)}</p>
                <img src={getUrl(obj)} alt="icon"/>
            </div>
        ))
    }

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
    // eslint-disable-next-line
    props.state.weatherData[props.state.type].map(obj => {
        if(obj.weather[0].main === 'Rain') rain = 0
        if(props.state.type === 'hourly') {
            let t = parseInt(obj.temp)
            if (t < 15 || t > 30) temp = 0
            sumTemp += t
            numberOfTemps++
            minTemp = (minTemp > t) ? t : minTemp
            maxTemp = (maxTemp < t) ? t : maxTemp
        }
        if(props.state.type === 'daily') {
            let tMin = parseInt(obj.temp.min)
            let tMax = parseInt(obj.temp.max)
            let tDay = parseInt(obj.temp.day)
            let tNight = parseInt(obj.temp.night)
            if(tMin < 15 || tMax > 30)
                temp = 0
            sumTemp += tDay + tNight
            numberOfTemps += 2
            minTemp = (minTemp > tMin) ? tMin : minTemp
            maxTemp = (maxTemp < tMax) ? tMax : maxTemp
        }
    })
    avgTemp = sumTemp/numberOfTemps
    if(avgTemp < 18 || avgTemp > 25) avg = 0
    let pts = avg + temp + rain
    let weatherComment
    switch(pts) {
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

    send_share(weatherComment)

    return (
        <div className="Weather">
            <p>{avgTemp}</p>
            <p>{minTemp}</p>
            <p>{maxTemp}</p>
            <p>{props.state.city}</p>
            <p>{weatherComment}</p>
            <img id="tenor" alt="tenor"/>
            {boxes()}
        </div>
    )
}

export default Weather
