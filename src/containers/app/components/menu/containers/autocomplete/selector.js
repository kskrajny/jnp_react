import { createSelector } from 'reselect'
import { getAutoArr } from './functions/getAutoArray';

const getAuto = state => {
    let input = state.toJS().autocomplete
    return {
        input: input,
        arr: getAutoArr(input)
    }
}

export const selectorAuto= createSelector(
    [getAuto],
    auto => auto
)