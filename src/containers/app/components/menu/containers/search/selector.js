import {createSelector} from "reselect"

const getHistory = state => state.toJS().forecast.history

export const selectorHistory = createSelector(
    [getHistory],
    history => history
)