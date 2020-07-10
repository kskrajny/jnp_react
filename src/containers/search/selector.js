import {createSelector} from "reselect"

const getHistory = state => state.get('forecast').get('history')

export const selectorHistory = createSelector(
    [getHistory],
    history => history
)