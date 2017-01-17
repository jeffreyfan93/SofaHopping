import React from 'react';

import SearchContainer from './search_container';
import SofaIndexContainer from './sofa_index_container';
import MapContainer from './map_container';

const SofasContainer = () => {
  return (
    <div className="sofa-container">
      <div className="sofa-container-top">
        <SearchContainer />
      </div>
      <div className="sofa-container-bottom">
        <div className="sofa-container-bottom-left">
          <SofaIndexContainer />
        </div>
        <div className="sofa-container-bottom-right">
          <MapContainer />
        </div>
      </div>
    </div>
  );
};

export default SofasContainer;
