import {createSelector} from "reselect"

const getForecast = state => state.toJS().forecast

export const selectorForecast = createSelector(
    [getForecast],
    forecast => forecast
)