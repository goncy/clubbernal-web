import React from 'react'
import {connect} from 'react-redux'

import {getInformation} from './selectors'

const CategoryInformation = ({information, category}) => (
  <div>
    {/* Full */}
    {!!information && (
      <div>
        <h1>{information.name}</h1>
        <p>{information.description}</p>
      </div>
    )}
    {/* Empty */}
    {!information && (
      <div>
        <h1>{category}</h1>
        <p>
          <i>No hay información para esta categoria</i>
        </p>
      </div>
    )}
  </div>
)

const mapStateToProps = ({activities}, {category}) => ({
  information: getInformation(category)(activities.categories)
})

export default connect(mapStateToProps)(CategoryInformation)
