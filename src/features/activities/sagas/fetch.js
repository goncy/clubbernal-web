import {put, call, takeEvery} from 'redux-saga/effects'

import {ACTIVITIES_NAMESPACE, API_URL} from '../constants'
import {fetchActivities} from '../actions'

function fetchActivitiesApi () {
  return fetch(API_URL + ACTIVITIES_NAMESPACE)
    .then(response => response.json())
    .then(response => ({response}))
    .catch(error => ({error}))
}

function* fetchActivitiesSaga () {
  yield put(fetchActivities.start())
  const {error, response} = yield call(fetchActivitiesApi)
  if (response) yield put(fetchActivities.success(response))
  else yield put(fetchActivities.failure(error))
}

function* fetchActivitiesWatcher () {
  yield takeEvery(fetchActivities.type, fetchActivitiesSaga)
}

export default [
  fetchActivitiesWatcher
]
