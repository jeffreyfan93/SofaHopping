import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';

const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = (review) => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = id => ({
  type: REMOVE_REVIEW,
  id
});

const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const removeReviewErrors = () => ({
  type: REMOVE_REVIEW_ERRORS
});

export const fetchReviews = () => dispatch => (
  APIUtil.fetchReviews()
    .then(reviews => dispatch(receiveReviews(reviews)))
);

export const addReview = review => dispatch => (
  APIUtil.addReview(review)
    .then(review1 => dispatch(receiveReview(review1)),
      error => dispatch(receiveReviewErrors(error.responseJSON)))
    .then(() => dispatch(removeReviewErrors))
);

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review)
    .then(review1 => dispatch(receiveReview(review1)),
      error => dispatch(receiveReviewErrors(error.responseJSON)))
    .then(() => dispatch(removeReviewErrors))
);

export const deleteReview = id => dispatch => (
  APIUtil.deleteReview(id)
    .then(review => dispatch(removeReview(review)))
);
