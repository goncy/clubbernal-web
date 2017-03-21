import React from 'react'
import {Route, Switch} from 'react-router-dom'

import activities from './features/activities'
import contact from './features/contact'
import common from './features/common'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={common.scenes.Home} />
      <Route exact path="/contacto" component={contact.scenes.ContactInformation} />
      <Route exact path="/actividades" component={activities.scenes.ActivitiesList} />
      <Route render={() => <div>No match</div>} />
    </Switch>
  </div>
)

export default Routes
