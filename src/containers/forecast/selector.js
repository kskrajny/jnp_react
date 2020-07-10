import {createSelector} from "reselect"

const getForecast = state => state.get('forecast')

export const selectorForecast = createSelector(
    [getForecast],
    forecast => forecast
)