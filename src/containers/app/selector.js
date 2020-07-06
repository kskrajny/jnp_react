import { createSelector } from 'reselect'

const getMode = state => state.get('mode')

export const selectorMode = createSelector(
    [getMode],
    mode => mode
)