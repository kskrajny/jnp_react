import { connect } from 'react-redux'
import Spin from '../components/Spin'
import {createSelector} from "reselect";

/* container */
const mapStateToProps = state => ({
    loading: selectorLoader(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Spin)

/* selectors */
const getLoader = state => state.loader

export const selectorLoader = createSelector(
    [getLoader],
    loader => loader
)