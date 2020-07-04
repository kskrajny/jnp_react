import { getMode } from '../consts'

export const mode = (state = getMode.dark, action) => {
    switch(action.type){
        case 'DARK':
            return getMode.dark
        case 'LIGHT':
            return getMode.light
        default:
            return state
    }
}