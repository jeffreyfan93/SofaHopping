import React from 'react';

class BookingsIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeBooking = this.removeBooking.bind(this);
  }

  removeBooking() {
    this.props.deleteBooking(this.props.booking.id);
  }

  render() {
    return (
      <li className="bookings-list-item">
        <div className="bookings-picture"><img src={this.props.booking.sofa.picture} /></div>
        <div className="bookings-info">
          <div className="bookings-host">Host: {this.props.booking.host.first_name} {this.props.booking.host.last_name}</div>
          <div className="bookings-address">{this.props.booking.sofa.address}</div>
          <div className="bookings-city-state-zip">{this.props.booking.sofa.city}, {this.props.booking.sofa.state}, {this.props.booking.sofa.zip}</div>
          <div className="bookings-dates">{this.props.booking.arrive_date} to {this.props.booking.depart_date}</div>
        </div>
        <div className="bookings-cancel">
          <button onClick={this.removeBooking} className="bookings-cancel-button">Cancel Booking</button>
        </div>
      </li>
    );
  }

}

export default BookingsIndexItem;
