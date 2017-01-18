import { connect } from 'react-redux';
import Bookings from './bookings';

import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { selectMyBookings } from '../selectors/booking_selector';

const mapStateToProps = state => {
  return ({
    bookings: selectMyBookings(state.bookings, state.session.currentUser),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: currentUserId => dispatch(fetchBookings(currentUserId)),
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bookings);
