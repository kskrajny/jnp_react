import React from 'react';
import './Weather.css'
import { getReadableTime } from './functions'

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
                <img src={getUrl(obj)} alt="icon"></img>
            </div>
        ))
    }

    return (
        <div className="Weather">
            <p>{props.state.city}</p>
            <p>{props.state.weatherData.timezone}</p>
            {boxes()}
        </div>
    )
}

export default Weather
