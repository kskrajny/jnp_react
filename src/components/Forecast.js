import React from 'react';
import Scroll from "react-scroll";
const Element = Scroll.Element;

const Forecast = ({forecastState}) => (
    <div className='Forecast'>
        <p>Weather in {forecastState.city} - {forecastState.weatherComment}</p>
        <div className='temp'>
            avg:{forecastState.avgTemp}<sup>o</sup>C
            min:{forecastState.minTemp}<sup>o</sup>C
            max:{forecastState.maxTemp}<sup>o</sup>C
        </div>
        <Element id="boxesContainer">
            {forecastState.boxes}
        </Element>
    </div>
)

export default Forecast