import {createSelector} from "reselect";

const getTenor = state => state.toJS().tenor

export const selectorTenor = createSelector(
    [getTenor],
    tenor => tenor
)