import axios from 'axios';

/**
 * ACTION TYPES
 */
const ADD_EVENT = 'ADD_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';
const GET_EVENTS = 'GET_EVENTS';
const UPDATE_EVENT = 'UPDATE_EVENTS';

/**
 * INITIAL STATE
 */
const defaultEvents = [];

/**
 * ACTION CREATORS
 */
export const getEvents = events => ({ type: GET_EVENTS, events });
export const addEvent = event => ({ type: ADD_EVENT, event });
export const removeEvent = id => ({ type: REMOVE_EVENT, id });
export const updateEvent = event => ({ type: UPDATE_EVENT, event });

/**
 * THUNK CREATORS
 */

export const fetchEvents = () => dispatch =>
  axios
    .get('/api/events')
    .then(res => res.data)
    .then(events => {
      dispatch(getEvents(events));
    })
    .catch(err => console.log(err));

export const createEvent = event => dispatch =>
  axios
    .post('/api/events', event)
    .then(res => res.data)
    .then(addedEvent => {
      dispatch(addEvent(addedEvent));
    })
    .catch(err => console.log(err));

export const deleteEvent = id => dispatch =>
  axios
    .delete(`/api/events/${id}`)
    .then(res => res.data)
    .then(() => {
      dispatch(removeEvent(id));
    })
    .catch(err => console.log(err));

export const eventUpdate = event => dispatch => {
  return axios
    .put(`/api/events/${event.id}`, event)
    .then(res => res.data)
    .then(updatedEvent => dispatch(updateEvent(updatedEvent)))
    .catch(err => console.log(err));
};

/**
 * REDUCER
 */
export default function(state = defaultEvents, action) {
  switch (action.type) {
    case GET_EVENTS:
      return action.events;
    case ADD_EVENT:
      return [...state, action.event];
    case REMOVE_EVENT:
      return state.filter(event => event.id !== action.id);
    case UPDATE_EVENT:
      return state
        .filter(event => event.id !== action.event.id)
        .concat(action.event);
    default:
      return state;
  }
}
