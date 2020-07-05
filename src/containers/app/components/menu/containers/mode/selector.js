import {createSelector} from "reselect";

const getMode = state => state.toJS().mode

export const selectorMode = createSelector(
    [getMode],
    mode => mode
)