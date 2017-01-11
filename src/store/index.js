import { createStore } from 'redux'
import R from 'ramda'

const DEFAULT_STATE = {
  sessions: [],
  loading: true,
  filters: ["Kidz Mash"],
}

const toggleFilter = (filter, filters) => {
  if(R.contains(filter)(filters)) {
    return R.without([filter])(filters)
  }

  return R.append(filter, filters)
}

const applyFilters = (sessions, filters) => {
  return R.reject((s) => R.contains(s.SessionType)(filters))(sessions)
}

let sessionData = []

const reducer = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case 'FETCHED_SESSIONS':
      sessionData = action.sessions
      return {...state, loading: false, sessions: sessionData}
    case 'TOGGLE_SESSION':
      const filters = toggleFilter(action.sessionName, state.filters)
      const sessions = applyFilters(sessionData, filters)
      return {...state, sessions: sessions, filters: filters}
    default:
      return state
  }
}

const store = createStore(reducer);
export default store
