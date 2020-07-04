import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => ({
    mode: state.mode
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)