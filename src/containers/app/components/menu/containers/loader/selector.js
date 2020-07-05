import {createSelector} from "reselect";

const getLoader = state => state.loader

export const selectorLoader = createSelector(
    [getLoader],
    loader => loader
)