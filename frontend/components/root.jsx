import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import SofasContainer from './sofas/sofas_container';
import DashboardContainer from './dashboard/dashboard_container';
import SplashContainer from './splash/splash_container';
import RequestFormContainer from './bookings/request_form_container';

import { removeErrors } from '../actions/session_actions';
import { removeBookingErrors } from '../actions/booking_actions';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(removeErrors());
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  };

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser === null) {
      replace('/');
    }
  };

  const _removeBookingErrors = () => {
    store.dispatch(removeBookingErrors());
  };

  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={SplashContainer} />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/dashboard" component={DashboardContainer} onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/sofas" component={SofasContainer} onEnter={_redirectIfNotLoggedIn}/>
          <Route path="/sofas/:sofaId/request" component={RequestFormContainer} onEnter={_removeBookingErrors}/>
        </Route>

      </Router>
    </Provider>
  );

};

export default Root;
