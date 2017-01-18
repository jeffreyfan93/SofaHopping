import React from 'react';
import GuestsIndexItem from './guests_index_item';

class Guests extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dashboard-guests-container">
        <div className="guests-title">My Guests</div>
        <ul className="guests-list">
          {this.props.bookings.map(booking => (
            <GuestsIndexItem
              key={booking.id}
              booking={booking}
              deleteBooking={this.props.deleteBooking} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Guests;
