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

class Weather extends React.Component {

    constructor(props) {
        super(props)
        this.avgTemp = undefined
        this.minTemp = undefined
        this.maxTemp = undefined
        this.weatherComment = undefined
    }


    render() {
        if (this.props.data.weatherData === undefined)
            return <div className="Weather"> What do you want to see ? </div>
        this.boxes = this.props.data.weatherData[this.props.data.type].map(obj => (
            <Element key={obj.dt}>
                <p>{getReadableTime(obj.dt, this.props.data.type)}</p>
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
        /* descriptions of weather */
        let descOfWet = []
        // eslint-disable-next-line
        this.props.data.weatherData[this.props.data.type].map(obj => {
            if (obj.weather[0].main === 'Rain') rain = 0
            descOfWet.push(obj.weather[0].description)
            if (this.props.data.type === 'hourly') {
                let t = parseFloat(obj.temp)
                if (t < 15 || t > 30) temp = 0
                sumTemp += t
                numberOfTemps++
                minTemp = (minTemp > t) ? t : minTemp
                maxTemp = (maxTemp < t) ? t : maxTemp
            }
            if (this.props.data.type === 'daily') {
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
        this.weatherComment = weatherComment
        this.avgTemp = avgTemp
        this.minTemp = minTemp
        this.maxTemp = maxTemp
        return (
            <div className="Weather">
                <p>Weather in {this.props.data.city} - {this.weatherComment}</p>
                <div className='temp'>
                    avg:{this.avgTemp.toFixed(2)}<sup>o</sup>C
                    min:{this.minTemp.toFixed(2)}<sup>o</sup>C
                    max:{this.maxTemp.toFixed(2)}<sup>o</sup>C
                </div>
                <Element name="test7" className="element" id="containerElement" style={{
                    position: 'relative',
                    height: '200px',
                    overflow: 'scroll',
                    marginBottom: '100px'
                }}>
                    {this.boxes}
                </Element>
            </div>
        )
    }
}

export default Weather