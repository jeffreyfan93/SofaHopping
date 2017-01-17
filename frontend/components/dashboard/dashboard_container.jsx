import React from 'react';
import SidebarContainer from './sidebar_container';
import BookingsContainer from './bookings_container';
import GuestsContainer from './guests_container';

const DashboardContainer = () => (
  <div className="dashboard-container">
    <div className="dashboard-container-left">
      <SidebarContainer />
      <div className="place-holder"></div>
    </div>
    <div className="dashboard-container-right">
      <BookingsContainer />
      <GuestsContainer />
    </div>
  </div>
);

export default DashboardContainer;
