import {createSelector} from "reselect";

const getLoader = state => state.toJS().loader

export const selectorLoader = createSelector(
    [getLoader],
    loader => loader
)