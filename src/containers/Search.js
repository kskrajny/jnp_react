import { connect } from 'react-redux'
import Search from '../components/Search'
import { nameAction, locAction } from '../actions'

const mapStateToProps = state => ({
    history: state.forecast.history
})

const mapDispatchToProps = dispatch => ({
    onName: (history) => dispatch(nameAction(history)),
    onLoc: (history) => dispatch(locAction(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)