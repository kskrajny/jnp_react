import {createSelector} from "reselect";

const getMode = state => state.mode

export const selectorMode = createSelector(
    [getMode],
    mode => mode
)