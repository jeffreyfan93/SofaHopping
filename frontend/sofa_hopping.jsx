import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { fetchSofas } from './actions/sofa_actions';
import { addSofa, updateSofa, deleteSofa, fetchSearchSofas } from './actions/sofa_actions';

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
  window.fetchSearchSofas = fetchSearchSofas;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
