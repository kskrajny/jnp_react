import { combineEpics } from 'redux-observable';
import nameEpic from './containers/search/epic'
import loaderEpic from './containers/loader/epic'
import tenorEpic from './containers/tenor/epic'

export default combineEpics(
    nameEpic,
    loaderEpic,
    tenorEpic
);