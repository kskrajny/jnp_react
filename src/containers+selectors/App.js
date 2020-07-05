import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import App from '../components/App'

/* container */
const mapStateToProps = state => ({
    mode: selectorMode(state)
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(App)

/* selectors */
const getMode = state => state.mode

export const selectorMode = createSelector(
    [getMode],
    mode => mode
)