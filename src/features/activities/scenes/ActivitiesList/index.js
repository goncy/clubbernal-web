import React, {Component} from 'react'
import {connect} from 'react-redux'

import common from '../../../common'
import ActivityInformationModal from '../../components/ActivityInformationModal'
import ActivitiesTable from '../../components/ActivitiesTable'

import {showModal, hideModal} from './selectors'

import './ActivitiesList.css'

class ActivitiesList extends Component {
  static propTypes = {
    status: React.PropTypes.string.isRequired
  }

  state = {
    modal: {
      show: false,
      information: null
    }
  }

  hideModal = () => {
    this.setState(hideModal)
  }

  showDetails = details => {
    this.setState(showModal(details))
  }

  render () {
    const {status} = this.props
    const {modal} = this.state
    return (
      <div className='ActivitiesList animated fadeIn'>
        <div className="content is-medium">
          <h1 className='title'>Lista de actividades</h1>
          <hr/>
          {/* Pending */}
          {(status === 'pending' || status === 'init') && (
            <common.components.Spinner />
          )}
          {/* Failure */}
          {status === 'failure' && (
            <div className="notification is-primary has-text-centered">
              Hubo un error obteniendo los precios, por favor, recargue la pagina
            </div>
          )}
          {/* Success */}
          {status === 'success' && (
            <div>
              <ActivitiesTable showDetails={this.showDetails} />
              {modal.show && (
                <ActivityInformationModal
                  information={modal.information}
                  close={this.hideModal}
                />
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({activities}) => ({
  status: activities.status
})

export default connect(mapStateToProps)(ActivitiesList)

