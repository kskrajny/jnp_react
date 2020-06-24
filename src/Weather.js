import React from 'react';
import { getReadableTime } from './functions'
import {send_share} from "./tenorFunctions";
import Scroll from 'react-scroll';

let Element = Scroll.Element;

const getImgCode = (obj) => {
    return obj.weather[0].icon
}

const getUrl = (obj) => {
    return 'http://openweathermap.org/img/wn/'+getImgCode(obj)+'@2x.png'
}

function Weather(props) {
    if(props.data.weatherData === undefined)
        return <div className="Weather"> What do you want to see ? </div>

    const boxes = props.data.weatherData[props.data.type].map(obj => (
        <Element key={obj.dt}>
            <p>{getReadableTime(obj.dt, props.data.type)}</p>
            <img src={getUrl(obj)} alt="icon"/>
        </Element>
    ))
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
    props.data.weatherData[props.data.type].map(obj => {
        if(obj.weather[0].main === 'Rain') rain = 0
        if(props.data.type === 'hourly') {
            let t = parseFloat(obj.temp)
            if (t < 15 || t > 30) temp = 0
            sumTemp += t
            numberOfTemps++
            minTemp = (minTemp > t) ? t : minTemp
            maxTemp = (maxTemp < t) ? t : maxTemp
        }
        if(props.data.type === 'daily') {
            let tMin = parseFloat(obj.temp.min)
            let tMax = parseFloat(obj.temp.max)
            let tDay = parseFloat(obj.temp.day)
            let tNight = parseFloat(obj.temp.night)
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
            <p>Weather in {props.data.city} - {weatherComment}</p>
            <div className='temp'>
                avg:{avgTemp.toFixed(2)}<sup>o</sup>C
                min:{minTemp.toFixed(2)}<sup>o</sup>C
                max:{maxTemp.toFixed(2)}<sup>o</sup>C
            </div>
            <Element name="test7" className="element" id="containerElement" style={{
                position: 'relative',
                height: '200px',
                overflow: 'scroll',
                marginBottom: '100px'
            }}>
                {boxes}
            </Element>
        </div>
    )
}

export default Weather