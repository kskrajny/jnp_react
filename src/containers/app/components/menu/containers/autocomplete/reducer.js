import { fromJS } from 'immutable'

export default (state = fromJS(''), action) => {
    switch(action.type) {
        case 'AUTOCOMPLETE':
            return fromJS(action.payload)
        default:
            return state
    }
}