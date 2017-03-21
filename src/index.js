import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'

import Root from './Root'

import 'font-awesome/css/font-awesome.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'animate.css/animate.css'

import './theme.css'
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
