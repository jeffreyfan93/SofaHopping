import React from 'react';
import { selectSofasFromCity } from '../selectors/sofa_selector';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: "San Francisco",
      num_of_guests: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchSofas(this.state.city, this.state.num_of_guests);
  }

  componentDidMount() {
    this.renderMap(this.state.city);
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.sofas !== this.props.sofas) {
      this.renderMap(this.state.city);
    }
  }

  renderMap(city) {
    let mapOptions;
    switch (city) {
      case "San Francisco":
        mapOptions = {
          center: { lat: 37.758694, lng: -122.443767 },
          zoom: 12
        };
        break;
      case "Los Angeles":
        mapOptions = {
          center: { lat: 34.030567, lng: -118.321824 },
          zoom: 11
        };
        break;
      case "New York":
        mapOptions = {
          center: { lat: 40.724047, lng: -74.038467 },
          zoom: 10
        };
        break;
      case "Boston":
        mapOptions = {
          center: { lat: 42.325600, lng: -71.064376 },
          zoom: 12
        };
        break;
    }

    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    this.props.sofas.map(sofa => {
      const lat = parseFloat(sofa.lat);
      const lng = parseFloat(sofa.lng);
      const latlng = { lat, lng };

      const infoWindow = new google.maps.InfoWindow({
        content: `<div>${sofa.address}</div><br/><div>Spots available: ${sofa.num_of_guests}</div>`
      });

      let marker = new google.maps.Marker({
        position: latlng,
        map: map
      });
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }

  render() {
    return (
      <div className="sofas-search-container">
        <form onSubmit={this.handleSubmit} className="sofas-search-form">
          <div className="sofas-search-params">
            <select
              value={this.state.city}
              onChange={this.update('city')}
              className="search-city">
              <option>-- Select Your Destination --</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="New York">New York</option>
              <option value="Boston">Boston</option>
            </select>

            <select
              value={this.state.num_of_guests}
              onChange={this.update('num_of_guests')}
              className="search-num-of-guests">
              <option>-- Select Number of Guests --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button type="submit" className="search-submit-button">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
