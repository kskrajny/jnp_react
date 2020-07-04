import { connect } from 'react-redux'
import Mode from '../components/Mode'
import { modeAction } from '../actions'

const mapStateToProps = state => ({
    modeType: state.mode.type
})

const mapDispatchToProps = dispatch => ({
    changeMode: modeType => {dispatch(modeAction(modeType))}
})

export default connect(mapStateToProps, mapDispatchToProps)(Mode)