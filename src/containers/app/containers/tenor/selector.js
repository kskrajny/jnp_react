import {createSelector} from "reselect";

const getTenor = state => state.tenor

export const selectorTenor = createSelector(
    [getTenor],
    tenor => tenor
)