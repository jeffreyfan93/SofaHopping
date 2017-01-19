import React from 'react';

class Map extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentWillReceiveProps() {
  //   this.renderMap();
  // }

  // renderMap() {
  //   const sanFrancisco = {
  //     center: { lat: 37.758694, lng: -122.443767 },
  //     zoom: 12
  //   };
  //   let map = new google.maps.Map(document.getElementById("map"), sanFrancisco);
  //
  //   this.props.sofas.map(sofa => {
  //     const lat = parseFloat(sofa.lat);
  //     const lng = parseFloat(sofa.lng);
  //     const latlng = { lat, lng };
  //
  //     const infoWindow = new google.maps.InfoWindow({
  //       content: `${sofa.address} Spots available: ${sofa.num_of_guests}`
  //     });
  //
  //     let marker = new google.maps.Marker({
  //       position: latlng,
  //       map: map
  //     });
  //     marker.addListener('click', () => {
  //       infoWindow.open(map, marker);
  //     });
  //   });
  // }

  // findLatLng() {
  //   const geocoder = new google.maps.Geocoder();
  //   const address = "851 California St., San Francisco, CA, 94108";
  //
  //   geocoder.geocode({ 'address': address}, (results, status) => {
  //     if(status === google.maps.GeocoderStatus.OK) {
  //       var lat = results[0].geometry.location.lat();
  //       var lng = results[0].geometry.location.lng();
  //     }
  //   });
  // }

  render() {
    return (
      <div className="sofas-map-container" id="map" ref="map"></div>
    );
  }
}

export default Map;
