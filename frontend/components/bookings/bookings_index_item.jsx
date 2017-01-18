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
        <div>
          <div><img src={this.props.booking.sofa.picture} /></div>
          <div>{this.props.booking.host.first_name} {this.props.booking.host.last_name}</div>
          <div>{this.props.booking.sofa.address} {this.props.booking.sofa.city} {this.props.booking.sofa.state} {this.props.booking.sofa.zip}</div>
          <div>{this.props.booking.arrive_date} to {this.props.booking.depart_date}</div>
        </div>
        <div>
          <button onClick={this.removeBooking}>Cancel Booking</button>
        </div>
      </li>
    );
  }

}

export default BookingsIndexItem;
