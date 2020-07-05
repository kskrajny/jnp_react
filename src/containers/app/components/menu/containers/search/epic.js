import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { getForecast } from "./functions/forForecast/getForecast";

const nameEpic1 = action$ => action$.pipe(
    ofType('NEW_FORECAST_NAME_EPIC'),
    switchMap(action => from(getForecast(action.history)))
) // sends NEW_FORECAST_TENOR

const nameEpic2 = action$ => action$.pipe(
    ofType('NEW_FORECAST_TENOR'),
    switchMap(action => of({
        type: 'NEW_FORECAST',
        payload: action.payloadForecast
    }))
)

export default combineEpics(
    nameEpic1,
    nameEpic2
)