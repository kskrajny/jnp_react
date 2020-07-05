import { connect } from 'react-redux'
import Forecast from '../components/Forecast'
import {createSelector} from "reselect";

/* container */
const mapStateToProps = (state) => ({
    forecast: selectorForecast(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)

/* selectors */
const getForecast = state => state.forecast

export const selectorForecast = createSelector(
    [getForecast],
    forecast => forecast
)