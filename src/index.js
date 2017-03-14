import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'font-awesome/css/font-awesome.css'
import './theme.css'
import './index.css'

import configureStore from './store/configureStore'

import Root from './Root'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
