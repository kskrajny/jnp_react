import { combineReducers } from 'redux-immutable';
import forecast from './containers/forecast/reducer'
import mode from './containers/mode/reducer'
import autocomplete from './containers/autocomplete/reducer'
import loader from './containers/loader/reducer'
import tenor from './containers/tenor/reducer'

export default combineReducers({
    forecast,
    mode,
    autocomplete,
    loader,
    tenor
})