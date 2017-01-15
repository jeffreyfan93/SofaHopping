import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { fetchSofas } from './actions/sofa_actions';
import { addSofa, updateSofa, deleteSofa } from './actions/sofa_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchSofas = fetchSofas;
  window.addSofa = addSofa;
  window.updateSofa = updateSofa;
  window.deleteSofa = deleteSofa;
  window.sofa = { id: 1, lat: 37.77937, lng: -122.4070, address: "200 6th Street", city: 'San Francisco', state: 'CA', zip: 94103, num_of_guests: 1, user_id: 1, picture: null };

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
