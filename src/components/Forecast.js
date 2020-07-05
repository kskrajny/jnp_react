import React from 'react'
import Scroll from "react-scroll"
import ForecastStyle from '../style/ForecastStyle'
import TempStyle from '../style/TempStyle'
import Box from '../style/Box'

const Element = Scroll.Element

const Forecast = ({ forecast }) => {
    if(forecast.city === undefined)
        return (
            <ForecastStyle>
                <p> Hope to see sunny weather </p>
            </ForecastStyle>
        )
    return (
        <ForecastStyle>
            <p>Weather in {forecast.city}</p>
            <p>{forecast.comment}</p>
            <TempStyle>
                avg:{forecast.temps.avgTemp}<sup>o</sup>C
                min:{forecast.temps.minTemp}<sup>o</sup>C
                max:{forecast.temps.maxTemp}<sup>o</sup>C
            </TempStyle>
            <Box>
                <Element id="boxesContainer">
                    {forecast.boxes}
                </Element>
            </Box>
        </ForecastStyle>
    )
}

export default Forecast