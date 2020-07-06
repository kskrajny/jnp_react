import { fromJS } from 'immutable'

export default (state = fromJS(0), action) => {
    switch(action.type){
        case 'SWITCH_IMAGE':
            return fromJS((state+1)%60)
        default:
            return state
    }
}