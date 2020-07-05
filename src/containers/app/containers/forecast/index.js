import React from 'react'
import Scroll from "react-scroll"
import {connect} from "react-redux";
import ForecastStyle from './components/forecaststyle'
import TempStyle from './components/tempstyle'
import BoxStyle from './components/boxstyle'
import {selectorForecast} from "./selector";

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
            <BoxStyle>
                <Element id="boxesContainer">
                    {forecast.boxes}
                </Element>
            </BoxStyle>
        </ForecastStyle>
    )
}

const mapStateToProps = (state) => ({
    forecast: selectorForecast(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)