import {createSelector} from "reselect";

const getLoader = state => state.get('loader')

export const selectorLoader = createSelector(
    [getLoader],
    loader => loader
)