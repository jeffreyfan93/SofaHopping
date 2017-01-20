import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  REMOVE_REVIEW_ERRORS
} from '../actions/review_actions';

import merge from 'lodash/merge';

const ReviewReducer = (state = {errors: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      let response = action.reviews;
      response.errors = [];
      return response;
    case RECEIVE_REVIEW:
      newState[action.review.id] = action.review;
      return newState;
    case REMOVE_REVIEW:
      delete newState[action.id];
      return newState;
    case RECEIVE_REVIEW_ERRORS:
      newState.errors = [];
      const errors = action.errors;
      return merge({}, newState, { errors });
    case REMOVE_REVIEW_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default ReviewReducer;
