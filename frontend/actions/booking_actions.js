import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const REMOVE_BOOKING_ERRORS = 'REMOVE_BOOKING_ERRORS';


export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const removeBooking = (id) => ({
  type: REMOVE_BOOKING,
  id
});

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const removeBookingErrors = () => ({
  type: REMOVE_BOOKING_ERRORS,
});

export const fetchBookings = () => dispatch => (
  APIUtil.fetchBookings()
    .then(bookings => dispatch(receiveBookings(bookings)))
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking)
    .then(booking1 => {
      dispatch(receiveBooking(booking1));
    },
      error => dispatch(receiveBookingErrors(error.responseJSON)))
    .then(() => dispatch(removeBookingErrors()))
);

export const deleteBooking = id => dispatch => (
  APIUtil.deleteBooking(id)
    .then(booking1 => dispatch(removeBooking(booking1.id)))
);
