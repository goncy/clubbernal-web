import React, {Component} from 'react'
import {connect} from 'react-redux'

import {flatCategories, groupByCategory, getCategories, hasActivities} from '../../selectors'

import './PricesTable.css'

class PricesTable extends Component {
  state = {
    filter: null
  }

  render () {
    const {groupedActivities} = this.props
    const {filter} = this.state
    const categories = getCategories(groupedActivities)
    const hasItems = hasActivities(groupedActivities)
    const activities = filter
      ? groupedActivities[filter]
      : flatCategories(groupedActivities)

    return hasItems
      ? (
        <div className='PricesTable'>
          <hr/>
          <div className="tabs is-centered">
            <ul>
              <li
                className={filter ? '' : 'is-active'}
                onClick={() => this.setState({filter: null})}
              >
                <a>Todos</a>
              </li>
              {categories.map((category, key) => (
                <li
                  key={key}
                  className={filter === category ? 'is-active' : ''}
                  onClick={() => this.setState({filter: category})}
                >
                  <a>{category}</a>
                </li>
              ))}
            </ul>
          </div>
          <table className='PricesTable table is-bordered is-stripped'>
            <thead>
              <tr>
                <th title="Nombre">Nombre</th>
                <th title="Precio">Precio</th>
              </tr>
            </thead>
            <tbody>
              {activities
                .map((item, key) => (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      )
      : (
        <div className="notification has-text-centered">
          No hay precios para mostrar
        </div>
      )
  }
}

const mapStateToProps = ({activities}) => ({
  groupedActivities: groupByCategory(activities)
})

export default connect(mapStateToProps)(PricesTable)
