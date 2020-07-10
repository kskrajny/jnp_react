import { fromJS } from 'immutable'

export default (state = fromJS(initialForecastState), action) => {
    switch(action.type){
        case 'NEW_FORECAST':
            let newHistory = (action.isNew) ? state.get('history').push(action.payload) : state.get('history')
            return state.merge({
                history: newHistory,
                type: action.payload.type,
                city: action.payload.city,
                boxes: action.payload.boxes,
                temps: action.payload.temps,
                comment: action.payload.comment,
                images: action.payload.images
            })
        default:
            return state
    }
}

const initialForecastState = {
    history: [],
    type: undefined,
    city: undefined,
    boxes: [],
    temps: undefined,
    comment: undefined,
    images: []
}