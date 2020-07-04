export const mode = (state = 'DARK', action) => {
    switch(action.type){
        case 'DARK':
            return action.type
        case 'LIGHT':
            return action.type
        default:
            return state
    }
}