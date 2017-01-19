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
      <ul className="request-form-errors-list">
        {this.props.errors.map((error, i) => (
          <li key={i} className="request-form-error">
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
          <div className="request-form-title">Reserve this sofa</div>
          <form onSubmit={this.handleSubmit} className="request-form">
            <div className="request-form-arrival">
              <label className="request-form-arrival-title">Arrival Date</label>
              <input
                type="date"
                value={this.state.arrive_date}
                onChange={this.update('arrive_date')}
                className="request-form-arrival-input" />
            </div>

            <div className="request-form-depart">
              <label className="request-form-depart-title">Departure Date</label>
              <input
                type="date"
                value={this.state.depart_date}
                onChange={this.update('depart_date')}
                className="request-form-depart-input"/>
            </div>

            <select
              value={this.state.num_of_guests}
              onChange={this.update('num_of_guests')}
              className="request-form-num-of-guests">
              <option>-- Select Number of Guests --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button type="submit" className="request-form-submit-button">Make a reservation</button>
          </form>
          {this.renderErrors()}
        </div>
      </div>
    );
  }

}

export default RequestForm;
