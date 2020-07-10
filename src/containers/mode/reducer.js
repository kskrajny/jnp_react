import { fromJS } from 'immutable'

export default (state = fromJS('DARK'), action) => {
    switch(action.type){
        case 'DARK':
            return fromJS(action.type)
        case 'LIGHT':
            return fromJS(action.type)
        default:
            return state
    }
}