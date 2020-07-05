import React from "react";
import {getTempsCommentImages} from "./getTempsCommentImages";
import {getBoxes} from "./getBoxes";

export const toForecastState = async (pack) => {
    let data = await getTempsCommentImages(pack)
    return {
        type: 'NEW_FORECAST',
        payload: {
            city: pack.city,
            type: pack.type,
            boxes: getBoxes(pack),
            temps: data.temps,
            comment: data.comment
        }
    }
}