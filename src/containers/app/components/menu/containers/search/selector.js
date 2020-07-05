import {createSelector} from "reselect"

const getHistory = state => state.forecast.history

export const selectorHistory = createSelector(
    [getHistory],
    history => history
)