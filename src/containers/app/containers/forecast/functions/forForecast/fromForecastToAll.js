export const fromForecastToAll = (forecast) => {
    return {
        type: 'NEW_FORECAST_TENOR',
        isNew: false,
        payloadForecast: {
            city: forecast.city,
            type: forecast.type,
            boxes: forecast.boxes,
            temps: forecast.temps,
            comment: forecast.comment,
            images: forecast.images
        },
        payloadTenor: {
            size: forecast.images.length,
            current: 0
        }
    }
}