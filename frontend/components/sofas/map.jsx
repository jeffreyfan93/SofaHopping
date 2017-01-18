import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    this.map =  new google.maps.Map(document.getElementById("map"), mapOptions);
  }

  render() {
    return (
      <div className="sofas-map-container" id="map" ref="map"></div>
    );
  }
}

export default Map;
