import { connect } from 'react-redux'
import Search from '../components/Search'
import { nameAction } from '../actions'
import {createSelector} from "reselect";

/* container */
const mapStateToProps = state => ({
    history: selectorHistory(state)
})

const mapDispatchToProps = dispatch => ({
    onName: (history) => dispatch(nameAction(history))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)

/* selectors */
const getHistory = state => state.forecast.history

export const selectorHistory = createSelector(
    [getHistory],
    history => history
)