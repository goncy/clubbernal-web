// @flow
import {fetchActivities} from './actions'

type ActivityAction = {
  type: string,
  payload: any
}

type Activity = {
  [key: string]: {
    schedule: string,
    price: string,
    category: string
  }
}

type Category = {
  [key: string]: {
    description: string,
    name: string
  }
}

type activitiesState = {
  list: Activity,
  categories: Category,
  status: 'init' | 'success' | 'pending' | 'failure'
}

const activities = (
  state: activitiesState = {
    list: {},
    categories: {},
    status: 'init'
  },
  {type, payload}: ActivityAction) => {
  switch (type) {
    case fetchActivities.SUCCESS:
      return {
        ...state,
        list: payload.list,
        categories: payload.categories,
        status: 'success'
      }
    case fetchActivities.START:
      return {
        ...state,
        status: 'pending'
      }
    case fetchActivities.FAILURE:
      return {
        ...state,
        status: 'failure'
      }
    default:
      return state
  }
}

export default activities
