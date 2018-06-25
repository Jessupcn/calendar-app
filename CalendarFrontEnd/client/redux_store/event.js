import axios from 'axios'

/**
 * ACTION TYPES
 */
const ADD_EVENT = 'ADD_EVENT'
const GET_EVENTS = 'GET_EVENTS'

/**
 * INITIAL STATE
 */
const defaultEvents = [];

/**
 * ACTION CREATORS
 */
export const getEvents = events => ({type: GET_EVENTS, events})
export const addEvent = event => ({type: ADD_EVENT, event})

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

export const createEvent = (event) =>
  dispatch =>
    axios.post('/api/events', event)
      .then(res => res.data)
      .then(event => {
        dispatch(addEvent(event))
      })
      .catch(err => console.log(err))


/**
 * REDUCER
 */
export default function (state = defaultEvents, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    case ADD_EVENT:
      return [...state, action.event]
    default:
      return state
  }
}