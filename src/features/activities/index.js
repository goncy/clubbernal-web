// Sagas
import fetchSaga from './sagas/fetch'
import populateSaga from './sagas/populate'
// Reducers
import reducer from './reducer'
// Constants
import * as constants from './constants'
// Actions
import * as actions from './actions'
// selectors
import * as selectors from './selectors'
// Scenes
import ActivitiesList from './scenes/ActivitiesList'

export default {
  actions,
  constants,
  reducer,
  selectors,
  sagas: [
    fetchSaga,
    populateSaga
  ],
  scenes: {
    ActivitiesList
  }
}
