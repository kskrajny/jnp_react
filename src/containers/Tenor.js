import { connect } from 'react-redux'
import Tenor from '../components/Tenor'

const mapStateToProps = state => ({
    images: state.tenor.images,
    current: state.tenor.current
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Tenor)