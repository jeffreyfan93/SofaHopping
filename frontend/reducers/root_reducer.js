import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SofaReducer from './sofa_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  sofas: SofaReducer
});

export default RootReducer;
