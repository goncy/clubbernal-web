import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getCategoriesNames, filterActivities, hasActivities} from '../../selectors'

import './ActivitiesTable.css'

class ActivitiesTable extends Component {
  state = {
    filter: null
  }

  render () {
    const {activitiesList, showDetails, categoriesNames} = this.props
    const {filter} = this.state
    const activities = filterActivities(filter, activitiesList)
    const hasResults = hasActivities(activities)
    return (
      <div className='ActivitiesTable'>
        <div className="tabs is-centered">
          <ul>
            <li
              className={filter ? '' : 'is-active'}
              onClick={() => this.setState({filter: null})}
            >
              <a>Todas</a>
            </li>
            {categoriesNames.map((category, key) => (
              <li
                key={key}
                className={filter === category.slug ? 'is-active' : ''}
                onClick={() => this.setState({filter: category.slug})}
              >
                <a>{category.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Full */}
        {hasResults && (
          <table className='table is-bordered is-stripped'>
            <tbody>
              {activities
                .map((item, key) => (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td width='1%'>
                      <a
                        className="button is-primary"
                        onClick={() => showDetails(item)}
                      >
                        <span className="icon">
                          <i className="fa fa-plus"></i>
                        </span>
                        <span>Mas información</span>
                      </a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )}
        {/* Empty */}
        {!hasResults && (
          <div className="notification has-text-centered">
            No hay actividades para esta categoria
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({activities}) => ({
  activitiesList: activities.list,
  categoriesNames: getCategoriesNames(activities.categories),
  status: activities.status
})

export default connect(mapStateToProps)(ActivitiesTable)
