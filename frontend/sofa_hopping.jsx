import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { fetchBookings, createBooking, deleteBooking } from './actions/booking_actions';
import { addSofa } from './actions/sofa_actions';
import { fetchReviews, addReview, updateReview, deleteReview } from './actions/review_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchReviews = fetchReviews;
  window.addReview = addReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.review = {review:{body:"this is a bad sofa", user_id:1, sofa_id:3}};
  const arrive_date = new Date(2017,2,3);
  const depart_date = new Date(2017,2,6);
  window.sofa = { address: "58 Middle Point Rd", city: 'San Francisco', state: 'CA', zip: 94124, num_of_guests: 1, user_id: 1};
  window.booking = {arrive_date: arrive_date, depart_date: depart_date, num_of_guests: 2, sofa_id: 1, guest_id: 2, host_id: 1};
  // window.booking1 = {arrive_date: arrive_date, depart_date: depart_date, num_of_guests: 2, sofa_id: 3, guest_id: 1, host_id: 2};

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
