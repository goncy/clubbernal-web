import { combineReducers } from 'redux'

import jokes from '../../features/jokes'
import activities from '../../features/activities'

const rootReducer = combineReducers({
  [jokes.constants.NAMESPACE]: jokes.reducer,
  [activities.constants.NAMESPACE]: activities.reducer
})

export default rootReducer
