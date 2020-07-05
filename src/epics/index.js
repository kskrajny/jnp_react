import { combineEpics } from 'redux-observable';
import nameEpic from './nameEpic'
import loaderEpic from './loaderEpic'

export default combineEpics(
    nameEpic,
    loaderEpic
);