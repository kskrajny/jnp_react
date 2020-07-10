import { fromJS } from 'immutable'

export default (state = fromJS(''), action) => {
    switch(action.type) {
        case 'LOADER':
            return fromJS(action.payload)
        default:
            return state
    }
}