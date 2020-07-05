import { combineReducers } from 'redux'
import { forecast } from './forecast'
import { mode } from './mode'
import { autocomplete } from './autocomplete'
import { loader } from './loader'
import { tenor } from './tenor'

export default combineReducers({
    forecast,
    mode,
    autocomplete,
    loader,
    tenor
})