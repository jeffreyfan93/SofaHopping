import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import { removeErrors } from '../actions/session_actions';

const removeAllErrors = (store) => () => {
  store.dispatch(removeErrors());
};




const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } onEnter={removeAllErrors(store)}>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onEnter={removeAllErrors(store)} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} onEnter={removeAllErrors(store)}/>
        </Route>

      </Router>
    </Provider>
  );

};

export default Root;
