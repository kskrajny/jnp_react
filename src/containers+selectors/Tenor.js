import { connect } from 'react-redux'
import Tenor from '../components/Tenor'
import {createSelector} from "reselect";

/* container */
const mapStateToProps = state => ({
    tenor: selectorTenor(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tenor)

/* selectors */
const getTenor = state => state.tenor

export const selectorTenor = createSelector(
    [getTenor],
    tenor => tenor
)