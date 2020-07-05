export default (state = '', action) => {
    switch(action.type) {
        case 'LOADER':
            return action.payload
        default:
            return state
    }
}