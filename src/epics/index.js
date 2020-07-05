import { combineEpics } from 'redux-observable';
import nameEpic from './nameEpic'
import loaderEpic from './loaderEpic'
import tenorEpic from './tenorEpic'

export default combineEpics(
    nameEpic,
    loaderEpic,
    tenorEpic
);