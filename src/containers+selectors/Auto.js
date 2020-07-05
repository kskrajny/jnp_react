import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import Auto from '../components/Auto'
import { getAutoArr } from '../functions&data/forAuto/getAutoArray';
import { autoAction } from '../actions'

/* container */
const mapStateToProps = state => ({
    auto: selectorAuto(state),
})

const mapDispatchToProps = dispatch => ({
    changeAutoArray: (input) => dispatch(autoAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auto)

/* selectors */
const getAuto = state => ({
    input: state.autocomplete,
    arr: getAutoArr(state.autocomplete)
})

export const selectorAuto= createSelector(
    [getAuto],
    auto => auto
)