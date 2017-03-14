// @flow
import {fetchActivities} from './actions'
import defaultPrices from './data/prices.json'

type ActivityAction = {
  type: string,
  payload: any
}

type Activity = {
  name: string,
  price: string,
  category: string
}

type activitiesState = Activity[]

const activities = (
  state: activitiesState = defaultPrices,
  {type, payload}: ActivityAction) => {
  switch (type) {
    case fetchActivities.SUCCESS:
      return payload
    default:
      return state
  }
}

export default activities
