import { connect } from 'react-redux'
import Mode from '../components/Mode'
import { modeAction } from '../actions'

const mapStateToProps = state => ({
    mode: state.mode
})

const mapDispatchToProps = dispatch => ({
    changeMode: mode => {dispatch(modeAction(mode))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mode)