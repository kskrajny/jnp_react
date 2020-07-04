import { connect } from 'react-redux'
import Search from '../components/Search'
import { loadAction, nameAction, locAction } from '../actions'
const mapStateToProps = state => ({
    history: state.forecast.history
})

const mapDispatchToProps = dispatch => ({
    onName: (data) => dispatch(nameAction(data)),
    onLoc: (data) => dispatch(locAction(data)),
    wait: (loading) => dispatch(loadAction(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)