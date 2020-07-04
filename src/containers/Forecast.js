import { connect } from 'react-redux'
import Forecast from '../components/Forecast'
import { getForecastState } from '../functions/getForecastState'

const mapStateToProps = (state) => ({
    forecastState: getForecastState(state.forecast)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)