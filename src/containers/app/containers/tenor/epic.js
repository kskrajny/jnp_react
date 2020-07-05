import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable'
import { of, interval } from 'rxjs'
import { mapTo, switchMap } from 'rxjs/operators'

const tenorEpic1 = action$ => action$.pipe(
    ofType('NEW_FORECAST_TENOR'),
    switchMap(action => of({
        type: 'NEW_IMAGES',
        payload: action.payloadTenor
    }))
)

const tenorEpic2 = () => interval(3000).pipe(
    mapTo({type: 'SWITCH_IMAGE'}),
)

export default combineEpics(
    tenorEpic1,
    tenorEpic2
)