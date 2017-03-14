import {NAMESPACE} from './constants'
import {makeAction} from '../../utils/makeActionCreator'

export const fetchActivities = makeAction(`${NAMESPACE}/FETCH_PRICES`)
