import { combineReducers } from 'redux'
import forecast from './containers/app/containers/forecast/reducer'
import mode from './containers/app/components/menu/containers/mode/reducer'
import autocomplete from './containers/app/components/menu/containers/autocomplete/reducer'
import loader from './containers/app/components/menu/containers/loader/reducer'
import tenor from './containers/app/containers/tenor/reducer'

export default combineReducers({
    forecast,
    mode,
    autocomplete,
    loader,
    tenor
})