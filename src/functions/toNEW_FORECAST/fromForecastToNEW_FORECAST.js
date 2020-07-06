export const fromForecastToNEW_FORECAST = (forecast) => {
    return {
        type: 'NEW_FORECAST',
        isNew: false,
        payload: forecast
    }
}