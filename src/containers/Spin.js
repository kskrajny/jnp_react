import { connect } from 'react-redux'
import Spin from '../components/Spin'

const mapStateToProps = state => ({
    loading: state.loader
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Spin)