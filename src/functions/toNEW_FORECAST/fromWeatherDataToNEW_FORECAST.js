import {getTempsCommentImages} from "./getDataFromApiResponse/getTempsCommentImages";
import {getBoxes} from "./getDataFromApiResponse/getBoxes";

export const fromWeatherDataToNEW_FORECAST = async (pack) => {
    let data = await getTempsCommentImages(pack)
    if(data === 'ERROR') return {type: 'ERROR'}
    return {
        type: 'NEW_FORECAST',
        isNew: true,
        payload: {
            city: pack.city,
            type: pack.type,
            boxes: getBoxes(pack),
            temps: data.temps,
            comment: data.comment,
            images: data.images
        }
    }
}