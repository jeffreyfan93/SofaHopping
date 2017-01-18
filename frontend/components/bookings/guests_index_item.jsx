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
        <div><img src={picture} /></div>
        <div>{first_name} {last_name}</div>
        <div>Reserved at {address}, {city}, {state}, {zip}</div>
        <div>From {arrive_date} to {depart_date}</div>
        <div>{num_of_guests} guests</div>
        <button onClick={this.removeBooking}>Cancel Booking</button>
      </li>
    );
  }

}

export default GuestsIndexItem;
