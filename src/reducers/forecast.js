export const forecast = (state = initialForecastState, action) => {
    switch(action.type){
        case 'NEW_FORECAST':
            return {
                history: [...state.history, action.payload],
                type: action.payload.type,
                city: action.payload.city,
                boxes: action.payload.boxes,
                temps: action.payload.temps,
                comment: action.payload.comment
            }
        default:
            return state
    }
}

const initialForecastState = {
    history: [],
    type: undefined,
    city: undefined,
    boxes: undefined,
    temps: undefined,
    comment: undefined
}