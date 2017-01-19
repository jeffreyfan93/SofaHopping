import React from 'react';

class GuestsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeBooking = this.removeBooking.bind(this);
  }

  removeBooking() {
    this.props.deleteBooking(this.props.booking.id);
  }

  render() {
    const { picture, first_name, last_name } = this.props.booking.guest;
    const { address, city, state, zip } = this.props.booking.sofa;
    const { arrive_date, depart_date, num_of_guests } = this.props.booking;
    return(
      <li className="guest-item">
        <div className="guest-picture"><img src={picture} /></div>
        <div className="guest-info">
          <div className="guest-name">{first_name} {last_name}</div>
          <div className="guest-address">{address}</div>
          <div className="guest-city-state-zip">{city}, {state}, {zip}</div>
          <div className="guest-dates">{arrive_date} to {depart_date}</div>
          <div className="guest-num-of-guests">{num_of_guests} guests</div>
        </div>
        <div className="guest-cancel">
          <button onClick={this.removeBooking} className="guest-cancel-button">Cancel Booking</button>
        </div>
      </li>
    );
  }

}

export default GuestsIndexItem;
