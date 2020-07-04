import { combineReducers } from 'redux'
import { forecast } from './forecast'
import { mode } from './mode'
import { autocomplete } from './autocomplete'
import { loader } from './loader'

export default combineReducers({
    forecast,
    mode,
    autocomplete,
    loader
})