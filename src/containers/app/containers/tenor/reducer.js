import { fromJS } from 'immutable'

export default (state = fromJS(initialTenorState), action) => {
    switch(action.type){
        case 'SWITCH_IMAGE':
            let curr = (state._root.entries[1][1]+1) % state._root.entries[0][1].size
            return fromJS({
                images: state._root.entries[0][1],
                current: curr
            })
        case 'NEW_IMAGES':
            return fromJS({
                images: action.payload.images,
                current: action.payload.current
            })
        default:
            return state
    }
}

const initialTenorState = {
    images: [],
    current: undefined
}