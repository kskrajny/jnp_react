import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => ({
    style: state.mode.style
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)