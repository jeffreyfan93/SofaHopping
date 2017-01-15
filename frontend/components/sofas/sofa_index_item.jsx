import React from 'react';
import { Link } from 'react-router';

class SofaIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { address, city, num_of_guests, picture, id } = this.props.sofa;

    return(
      <li>
        <div>
          <img src={picture} />
        </div>
        <div>
          Address: {address}, {city}
        </div>
        <div>
          {num_of_guests} open sofas
        </div>
        <Link to={`/sofas/${id}/request`}>
          Request Stay
        </Link>
        <div>Reviews</div>
      </li>
    );
  }
}

export default SofaIndexItem;
