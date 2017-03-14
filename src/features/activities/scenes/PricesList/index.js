import React, {Component} from 'react'

import PricesTable from '../../components/PricesTable'

import './PricesList.css'

class PricesList extends Component {
  render () {
    return (
      <div className='PricesList'>
        <div className="content is-medium">
          <h1>Lista de precios</h1>
          <PricesTable />
          <div className="level">
            <div className="level-item">
              <small>
                Los precios pueden variar sin previo aviso
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricesList
