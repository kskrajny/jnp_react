import { initialForecastState } from '../functions/consts'

export const forecast = (state = initialForecastState, action) => {
    switch(action.type){
        case 'NEW_FORECAST':
            return {
                history: [...state.history, action.data],
                city: action.data.city,
                type: action.data.type,
                weatherData: action.data.weatherData
            }
        default:
            return state
    }
}