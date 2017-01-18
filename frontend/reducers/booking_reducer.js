import {
  RECEIVE_BOOKINGS,
  RECEIVE_BOOKING,
  REMOVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  REMOVE_BOOKING_ERRORS
} from '../actions/booking_actions';

import merge from 'lodash/merge';

const BookingReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      let response = action.bookings;
      response.errors = [];
      return response;
    case RECEIVE_BOOKING:
      console.log(action);
      newState[action.booking.id] = action.booking;
      return newState;
    case REMOVE_BOOKING:
      delete newState[action.id];
      return newState;
    case RECEIVE_BOOKING_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case REMOVE_BOOKING_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }

};

export default BookingReducer;
