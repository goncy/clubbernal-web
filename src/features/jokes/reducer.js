// @flow
import {fetchJoke} from './actions'

type JokesAction = {
  type: string,
  payload: any
}

type JokeResponse = {
  category: ?string,
  icon_url: string,
  id: string,
  url: string,
  value: string
}

type JokesState = JokeResponse[]

const jokes = (
  state: JokesState = [],
  {type, payload}: JokesAction) => {
  switch (type) {
    case fetchJoke.SUCCESS:
      return state.concat(payload)
    default:
      return state
  }
}

export default jokes
