import React from 'react'
import Scroll from "react-scroll"
import {connect} from "react-redux";
import ForecastStyle from './components/forecaststyle'
import TempStyle from './components/tempstyle'
import BoxStyle from './components/boxstyle'
import {selectorForecast} from "./selector";

const Element = Scroll.Element

const Forecast = ({ forecast }) => {
    if(forecast.get('city') === undefined)
        return (
            <ForecastStyle>
                <p> Hope to see sunny weather </p>
            </ForecastStyle>
        )
    return (
        <ForecastStyle>
            <p>Weather in {forecast.get('city')}</p>
            <p>{forecast.get('comment')}</p>
            <TempStyle>
                avg:{forecast.get('temps').avgTemp}<sup>o</sup>C
                min:{forecast.get('temps').minTemp}<sup>o</sup>C
                max:{forecast.get('temps').maxTemp}<sup>o</sup>C
            </TempStyle>
            <BoxStyle>
                <Element id="boxesContainer">
                    {forecast.get('boxes')}
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