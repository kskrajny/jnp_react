import React from 'react'
import Scroll from "react-scroll"
import ForecastStyle from '../style/ForecastStyle'
import TempStyle from '../style/TempStyle'
import Box from '../style/Box'

const Element = Scroll.Element

const Forecast = ({ city, comment, temps, boxes }) => {
    if(city === undefined)
        return (
            <ForecastStyle>
                <p> Hope to see sunny weather </p>
            </ForecastStyle>
        )
    return (
        <ForecastStyle>
            <p>Weather in {city}</p>
            <p>{comment}</p>
            <TempStyle>
                avg:{temps.avgTemp}<sup>o</sup>C
                min:{temps.minTemp}<sup>o</sup>C
                max:{temps.maxTemp}<sup>o</sup>C
            </TempStyle>
            <Box>
                <Element id="boxesContainer">
                    {boxes}
                </Element>
            </Box>
        </ForecastStyle>
    )
}

export default Forecast