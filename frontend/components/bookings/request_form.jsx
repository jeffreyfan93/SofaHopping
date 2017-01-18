import React from 'react';
import merge from 'lodash/merge';
import { withRouter} from 'react-router';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrive_date: "",
      depart_date: "",
      num_of_guests: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let request = merge({}, this.state, {
      guest_id: parseInt(this.props.currentUser.id),
      sofa_id: parseInt(this.props.sofa.id),
      host_id: parseInt(this.props.sofa.user_id)
    });
    this.props.createBooking(request).then(() => {
      this.props.router.push("/dashboard");
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="request-screen">
        <div className="request-form-container">
          <div>Reserve this sofa</div>
          <form onSubmit={this.handleSubmit}>
            <label>Arrival Date
              <input
                type="date"
                value={this.state.arrive_date}
                onChange={this.update('arrive_date')} />
            </label>
            <label>Departure Date
              <input
                type="date"
                value={this.state.depart_date}
                onChange={this.update('depart_date')}/>
            </label>
            <select
              value={this.state.num_of_guests}
              onChange={this.update('num_of_guests')}>
              <option>-- Select Number of Guests --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button type="submit">Make a reservation</button>
          </form>
          {this.renderErrors()}
        </div>
      </div>
    );
  }

}

export default RequestForm;
