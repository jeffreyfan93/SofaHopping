import { connect } from 'react-redux';
import Guests from './guests';

import { selectMyGuestBookings } from '../selectors/booking_selector';
import { deleteBooking } from '../../actions/booking_actions';

const mapStateToProps = state => {
  return({
    bookings: selectMyGuestBookings(state.bookings, state.session.currentUser.id),
  });
};

const mapDispatchToProps = dispatch => ({
  deleteBooking: id => dispatch(deleteBooking(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guests);
