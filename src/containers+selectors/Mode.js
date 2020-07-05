import { connect } from 'react-redux'
import Mode from '../components/Mode'
import { modeAction } from '../actions'
import {createSelector} from "reselect";

/* container */
const mapStateToProps = state => ({
    mode: selectorMode(state)
})

const mapDispatchToProps = dispatch => ({
    changeMode: mode => {dispatch(modeAction(mode))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mode)

/* selectors */
const getMode = state => state.mode

export const selectorMode = createSelector(
    [getMode],
    mode => mode
)