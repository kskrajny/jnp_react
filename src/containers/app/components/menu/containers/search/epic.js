import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable'
import { from, } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { getForecast } from "../../../../../../functions/getForecast";

const nameEpic = action$ => action$.pipe(
    ofType('NEW_FORECAST_NAME_EPIC'),
    switchMap(action => from(getForecast(action.history)))
) // sends NEW_FORECAST


export default combineEpics(
    nameEpic
)