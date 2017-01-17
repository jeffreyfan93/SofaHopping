import React from 'react';
import { Link } from 'react-router';

class SofaIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { address, city, num_of_guests, picture, id } = this.props.sofa;

    return(
      <li className="sofa-index-item">
        <div className="sofa-index-item-info">
          <div className="sofa-item-no-reviews">
            <div className="sofa-item-picture"><img src={picture} /></div>
            <div className="sofa-info-address-guests">
              <div className="sofa-item-address">{address}, {city}</div>
              <div className="sofa-item-num-of-guests">Spots available: {num_of_guests}</div>
            </div>
          </div>
          <div className="sofa-item-reviews">Reviews</div>
        </div>
        <div className="sofa-item-request">
          <Link to={`/sofas/${id}/request`}>Request Stay</Link>
        </div>
      </li>
    );
  }
}

export default SofaIndexItem;
