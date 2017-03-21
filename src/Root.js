import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

import {appInitialized} from './features/common/actions'

import Layout from './features/common/components/Layout'
import Routes from './Routes'

class Root extends Component {
  static propTypes = {
    appInitialized: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    const {appInitialized} = this.props
    appInitialized()
  }

  render () {
    return (
      <Router>
        <Layout>
          <Routes/>
        </Layout>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  appInitialized: appInitialized.run
}

export default connect(undefined, mapDispatchToProps)(Root)
