import React from 'react'
import {Route, Switch} from 'react-router-dom'

import jokes from './features/jokes'
import activities from './features/activities'
import common from './features/common'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={common.scenes.Home} />
      <Route exact path="/contacto" component={common.scenes.Home} />
      <Route exact path="/actividades" component={common.scenes.Home} />
      <Route exact path="/precios" component={activities.scenes.PricesList} />
      <Route exact path="/jokes" component={jokes.scenes.List} />
      <Route render={() => <div>No match</div>} />
    </Switch>
  </div>
)

export default Routes
