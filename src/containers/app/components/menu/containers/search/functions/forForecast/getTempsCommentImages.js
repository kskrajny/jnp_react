import {handleTenorImages} from "../forTenor/handleTenorImages";

export const getTempsCommentImages = async pack => {
    if(pack.weatherData === undefined) return undefined
    /* check if weather will be nice */
    /* points */
    let rain = 1
    let temp = 1
    let avg = 1
    /* helpful data */
    let avgTemp
    let sumTemp = 0
    let numberOfTemps = 0
    let minTemp = 50
    let maxTemp = -50
    /* descriptions of weather */
    let descOfWet = []
    // eslint-disable-next-line
    pack.weatherData[pack.type].map(obj => {
        if (obj.weather[0].main === 'Rain') rain = 0
        descOfWet.push(obj.weather[0].description)
        if (pack.type === 'hourly') {
            let t = parseFloat(obj.temp)
            if (t < 15 || t > 30) temp = 0
            sumTemp += t
            numberOfTemps++
            minTemp = (minTemp > t) ? t : minTemp
            maxTemp = (maxTemp < t) ? t : maxTemp
        }
        if (pack.type === 'daily') {
            let tMin = parseFloat(obj.temp.min)
            let tMax = parseFloat(obj.temp.max)
            let tDay = parseFloat(obj.temp.day)
            let tNight = parseFloat(obj.temp.night)
            if (tMin < 15 || tMax > 30)
                temp = 0
            sumTemp += tDay + tNight
            numberOfTemps += 2
            minTemp = (minTemp > tMin) ? tMin : minTemp
            maxTemp = (maxTemp < tMax) ? tMax : maxTemp
        }
    })
    avgTemp = sumTemp / numberOfTemps
    if (avgTemp < 18 || avgTemp > 25) avg = 0
    let pts = avg + temp + rain
    let weatherComment
    switch (pts) {
        case 3:
            weatherComment = 'nice'
            break
        case 2:
            weatherComment = 'passable'
            break
        default:
            weatherComment = 'not nice'
            break
    }
    descOfWet = [...new Set(descOfWet)]
    if (descOfWet.len === 0)
        descOfWet.push('pusty')
    let images = await handleTenorImages(descOfWet)
    if(images === 'ERROR') return 'ERROR'
    return {
        images: images,
        comment: weatherComment,
        temps: {
            avgTemp: avgTemp.toFixed(2),
            minTemp: minTemp.toFixed(2),
            maxTemp: maxTemp.toFixed(2)
        }
    }
}