import {fork} from 'redux-saga/effects'

import activities from '../../features/activities'

function startSagas (...sagas) {
  return function * rootSaga () {
    yield sagas.map(saga => saga.map(fork))
  }
}

export default startSagas(
  ...activities.sagas
)
