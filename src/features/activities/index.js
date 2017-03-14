// Reducers
import reducer from './reducer'
// Constants
import * as constants from './constants'
// Actions
import * as actions from './actions'
// Actions
import * as selectors from './selectors'

import PricesList from './scenes/PricesList'

export default {
  actions,
  constants,
  reducer,
  selectors,
  scenes: {
    PricesList
  }
}
