import {put, take} from 'redux-saga/effects'

import {fetchActivities} from '../actions'
import common from '../../common'

function* populateAcfetchActivitiessWatcher () {
  yield take(common.actions.appInitialized.type)
  yield put(fetchActivities.run())
}

export default [
  populateAcfetchActivitiessWatcher
]
