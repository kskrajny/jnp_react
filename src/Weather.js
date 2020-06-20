import React from 'react';
import './Weather.css'

function Weather(props) {
    if(props.state.city === undefined)
        return <div className="Weather"> What do you want to see ? </div>
    return (
        <div className="Weather">
            {props.state.city}
            {props.state.weatherData.timezone}
        </div>
    )
}

export default Weather
