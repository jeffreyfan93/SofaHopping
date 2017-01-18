import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SofaReducer from './sofa_reducer';
import BookingReducer from './booking_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  sofas: SofaReducer,
  bookings: BookingReducer
});

export default RootReducer;
