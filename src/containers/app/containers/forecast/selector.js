import {createSelector} from "reselect"

const getForecast = state => state.forecast

export const selectorForecast = createSelector(
    [getForecast],
    forecast => forecast
)