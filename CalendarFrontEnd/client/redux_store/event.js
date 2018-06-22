import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_EVENTS = 'GET_EVENTS'

/**
 * INITIAL STATE
 */
const defaultEvents = [];

/**
 * ACTION CREATORS
 */
export const getEvents = events => ({type: GET_EVENTS, events})

/**
 * THUNK CREATORS
 */

export const fetchEvents = () =>
  dispatch =>
    axios.get('/api/events')
      .then(res => res.data)
      .then(events => {
        dispatch(getEvents(events))
      })
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultEvents, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    default:
      return state
  }
}