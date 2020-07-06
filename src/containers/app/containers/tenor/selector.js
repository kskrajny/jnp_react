import {createSelector} from "reselect";

const getTenor = state => state.get('tenor')
const getImages = state => state.get('forecast').get('images')

export const selectorTenor = createSelector(
    getTenor,
    getImages,
    (tenor, images) => (images[tenor%images.length])
)