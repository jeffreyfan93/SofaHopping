import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user1 => dispatch(receiveCurrentUser(user1)),
      error => dispatch(receiveErrors(error.responseJSON)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(user1 => dispatch(receiveCurrentUser(user1)),
      error => dispatch(receiveErrors(error.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});
