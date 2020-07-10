import { createSelector } from 'reselect'
import { getAutoArr } from './functions/getAutoArray';

const getAuto = state => {
    let input = state.get('autocomplete')
    return {
        input: input,
        arr: getAutoArr(input)
    }
}

export const selectorAuto= createSelector(
    [getAuto],
    auto => auto
)