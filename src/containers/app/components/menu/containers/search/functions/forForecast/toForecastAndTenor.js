import {getTempsCommentImages} from "./getTempsCommentImages";
import {getBoxes} from "./getBoxes";

export const toForecastAndTenor = async (pack) => {
    let data = await getTempsCommentImages(pack)
    if(data === 'ERROR') return {type: 'ERROR'}
    return {
        type: 'NEW_FORECAST_TENOR',
        payloadForecast: {
            city: pack.city,
            type: pack.type,
            boxes: getBoxes(pack),
            temps: data.temps,
            comment: data.comment
        },
        payloadTenor: {
            images: data.images,
            current: 0
        }
    }
}