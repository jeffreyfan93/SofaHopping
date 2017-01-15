import { RECEIVE_SOFAS, RECEIVE_SOFA, REMOVE_SOFA } from '../actions/sofa_actions';
import merge from 'lodash/merge';

const SofaReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SOFAS:
      return action.sofas;
    case RECEIVE_SOFA:
      newState[action.sofa.id] = action.sofa;
      return newState;
      // return merge({}, state, {[action.sofa.id]: action.sofa});
    case REMOVE_SOFA:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default SofaReducer;
