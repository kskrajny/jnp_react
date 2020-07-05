import { connect } from 'react-redux'
import Forecast from '../components/Forecast'

const mapStateToProps = (state) => ({
    city: state.forecast.city,
    comment: state.forecast.comment,
    temps: state.forecast.temps,
    boxes: state.forecast.boxes
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)