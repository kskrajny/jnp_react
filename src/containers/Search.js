import { connect } from 'react-redux'
import Search from '../components/Search'
import { nameAction } from '../actions'

const mapStateToProps = state => ({
    history: state.forecast.history
})

const mapDispatchToProps = dispatch => ({
    onName: (history) => dispatch(nameAction(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)