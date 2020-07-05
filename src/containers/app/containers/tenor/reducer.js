export default (state = initialTenorState, action) => {
    switch(action.type){
        case 'SWITCH_IMAGE':
            let curr = (state.images.length === 0) ? undefined : (state.current+1) % state.images.length
            return {
                images: state.images,
                current: curr
            }
        case 'NEW_IMAGES':
            return {
                images: action.payload.images,
                current: action.payload.current
            }
        default:
            return state
    }
}

const initialTenorState = {
    images: [],
    current: undefined
}