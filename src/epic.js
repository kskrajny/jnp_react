import { combineEpics } from 'redux-observable';
import nameEpic from './containers/app/components/menu/containers/search/epic'
import loaderEpic from './containers/app/components/menu/containers/loader/epic'
import tenorEpic from './containers/app/containers/tenor/epic'

export default combineEpics(
    nameEpic,
    loaderEpic,
    tenorEpic
);