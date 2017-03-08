import React from 'react'
import {Route} from 'react-router-dom'

import jokes from './features/jokes'

const Routes = () => (
  <div>
    <Route exact path="/" component={jokes.scenes.List} />
  </div>
)

export default Routes
