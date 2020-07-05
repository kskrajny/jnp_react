import { connect } from 'react-redux'
import Auto from '../components/Auto'
import { getAutoArr } from '../functions&data/forAuto/getAutoArray';
import { autoAction } from '../actions'

const mapStateToProps = state => ({
    input: state.autocomplete,
    autoArray: (state.autocomplete.length > 1) ? getAutoArr(state.autocomplete) : []
})

const mapDispatchToProps = dispatch => ({
    changeAutoArray: (input) => dispatch(autoAction(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Auto)