import { createSelector } from 'reselect'
import { getAutoArr } from './functions/getAutoArray';

const getAuto = state => ({
    input: state.autocomplete,
    arr: getAutoArr(state.autocomplete)
})

export const selectorAuto= createSelector(
    [getAuto],
    auto => auto
)