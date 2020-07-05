import React from "react";
import Scroll from "react-scroll"
import {getUrl} from "./getUrlReadableTime";
import {getReadableTime} from "./getUrlReadableTime"

const Element = Scroll.Element

export const getBoxes = pack => {
    if(pack.weatherData === undefined) return undefined
    return pack.weatherData[pack.type].map(obj => (
        <Element key={obj.dt}>
            <p>{getReadableTime(obj.dt, pack.type)}</p>
            <img src={getUrl(obj)} alt="icon"/>
        </Element>
    ))
}