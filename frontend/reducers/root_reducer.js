import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SofaReducer from './sofa_reducer';
import BookingReducer from './booking_reducer';
import ReviewReducer from './review_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  sofas: SofaReducer,
  bookings: BookingReducer,
  reviews: ReviewReducer
});

export default RootReducer;
