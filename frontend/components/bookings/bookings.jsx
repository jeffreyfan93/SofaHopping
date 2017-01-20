import React from 'react';
import BookingsIndexItem from './bookings_index_item';

class Bookings extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings(this.props.currentUser.id);
  }

  render() {
    this.props.bookings.sort((a, b) => {
      if (a.arrive_date < b.arrive_date) {
        return -1;
      } else {
        return 1;
      }
    });

    return (
      <div className="dashboard-bookings-container">
        <div className="bookings-title">My Bookings</div>
        <ul className="bookings-list">
          {this.props.bookings.map(booking => (
            <BookingsIndexItem
              key={booking.id}
              booking={booking}
              deleteBooking={this.props.deleteBooking} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Bookings;
