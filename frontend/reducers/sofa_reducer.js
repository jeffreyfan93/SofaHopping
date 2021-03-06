import {
  RECEIVE_SOFAS,
  RECEIVE_SOFA,
  REMOVE_SOFA,
  RECEIVE_SOFA_ERRORS,
  REMOVE_SOFA_ERRORS
} from '../actions/sofa_actions';

import merge from 'lodash/merge';

const SofaReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SOFAS:
      let response = action.sofas;
      response.errors = [];
      return response;
    case RECEIVE_SOFA:
      newState[action.sofa.id] = action.sofa;
      return newState;
    case REMOVE_SOFA:
      delete newState[action.id];
      return newState;
    case RECEIVE_SOFA_ERRORS:
      newState.errors = [];
      const errors = action.errors;
      return merge({}, newState, { errors });
    case REMOVE_SOFA_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default SofaReducer;
