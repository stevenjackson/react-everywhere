import { createStore } from 'redux'

const DEFAULT_STATE = {
  sessions: [],
  loading: true,
}

const reducer = (state = DEFAULT_STATE, action) => {
  return state
}

const store = createStore(reducer);
export default store