export const autocomplete = (state = '', action) => {
    switch(action.type) {
        case 'AUTOCOMPLETE':
            return action.payload
        default:
            return state
    }
}
