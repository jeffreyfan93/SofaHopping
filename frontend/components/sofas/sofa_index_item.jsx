import React from 'react';
import { Link } from 'react-router';

import ReviewsContainer from '../reviews/reviews_container';

class SofaIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOpen: false
    };

    this.toggleReview = this.toggleReview.bind(this);
  }

  toggleReview() {
    const nextState = !this.state.toggleOpen;
    this.setState({toggleOpen: nextState});
  }

  showReviews() {
    if(this.state.toggleOpen) {
      return(<ReviewsContainer sofa={this.props.sofa}/>);
    }
  }

  render() {
    const { address, city, state, zip, num_of_guests, picture, id } = this.props.sofa;

    return(
      <li className="sofa-index-item">
        <div className="sofa-index-item-top">
          <div className="sofa-item-picture"><img src={picture} /></div>
          <div className="sofa-info-address-guests">
            <div className="sofa-item-address">{address}</div>
            <div className="sofa-item-city-state-zip">{city}, {state}, {zip}</div>
            <div className="sofa-item-num-of-guests">Spots available: {num_of_guests}</div>
          </div>
          <div className="sofa-item-request">
            <Link to={`/sofas/${id}/request`} className="sofa-item-request-link">Request Stay</Link>
          </div>
        </div>
        <div className="sofa-item-bottom">
          <button onClick={this.toggleReview} className="sofa-item-reviews">Reviews</button>
        </div>
        {this.showReviews()}
      </li>
    );
  }
}

export default SofaIndexItem;
