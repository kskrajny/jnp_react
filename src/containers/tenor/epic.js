import { combineEpics } from 'redux-observable';
import { interval } from 'rxjs'
import { mapTo } from 'rxjs/operators'

const tenorEpic = () => interval(3000).pipe(
    mapTo({type: 'SWITCH_IMAGE'}),
)

export default combineEpics(
    tenorEpic
)