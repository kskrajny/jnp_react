import React from 'react'
import Scroll from "react-scroll"
import ForecastStyle from '../style/ForecastStyle'
import TempStyle from '../style/TempStyle'
import Box from '../style/Box'
const Element = Scroll.Element

const Forecast = ({forecastState}) => {
    if(forecastState.data === undefined)
        return (
            <ForecastStyle>
                <p> Hope to see sunny weather </p>
            </ForecastStyle>
        )
    return (
        <ForecastStyle>
            <p>Weather in {forecastState.city}</p>
            <p>{forecastState.data.weatherComment}</p>
            <TempStyle>
                avg:{forecastState.data.avgTemp}<sup>o</sup>C
                min:{forecastState.data.minTemp}<sup>o</sup>C
                max:{forecastState.data.maxTemp}<sup>o</sup>C
            </TempStyle>
            <Box>
                <Element id="boxesContainer">
                    {forecastState.boxes}
                </Element>
            </Box>
        </ForecastStyle>
    )
}

export default Forecast