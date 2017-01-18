import { connect } from 'react-redux';
import RequestForm from './request_form';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  const sofa = state.sofas[ownProps.params.sofaId];
  return({
    errors: state.bookings.errors,
    sofa: sofa,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestForm);
