import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { loadAction } from './action';

const loaderEpic1 = action$ => action$.pipe(
    ofType('NEW_FORECAST_NAME_EPIC' || 'NEW_FORECAST_LOC_EPIC'),
    map(action => loadAction(true))
)

const loaderEpic2 = action$ => action$.pipe(
    ofType('NEW_FORECAST'),
    map(action => loadAction(false))
)

const loaderEpic3 = action$ => action$.pipe(
    ofType('ERROR'),
    map(action => loadAction(false))
)

export default combineEpics(
    loaderEpic1,
    loaderEpic2,
    loaderEpic3
)