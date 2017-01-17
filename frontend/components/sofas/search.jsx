import React from 'react';
import { selectSofasFromCity } from '../selectors/sofa_selector';

class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      city: "",
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
    this.setState({
      city: "",
      num_of_guests: ""
    });
  }

  render() {
    return (
      <div className="sofas-search-container">
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
