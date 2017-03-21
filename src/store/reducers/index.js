import { combineReducers } from 'redux'

import activities from '../../features/activities'

const rootReducer = combineReducers({
  [activities.constants.NAMESPACE]: activities.reducer
})

export default rootReducer
