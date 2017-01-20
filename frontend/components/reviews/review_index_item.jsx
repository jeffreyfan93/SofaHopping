import React from 'react';

import ReviewForm from './review_form';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOpen: false
    };
    this.ownReview = this.ownReview.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.removeReview = this.removeReview.bind(this);
    this.showUpdateForm = this.showUpdateForm.bind(this);

  }

  removeReview() {
    this.props.deleteReview(this.props.review.id).then(this.props.fetchReviews());
  }

  ownReview() {
    if(this.props.currentUser.id === this.props.review.user_id) {
      return (
        <div className="review-own-buttons">
          <button onClick={this.toggleForm} className="review-update-button">Update</button>
          <button onClick={this.removeReview} className="review-delete-button" >Delete</button>
        </div>
      );
    }
  }

  toggleForm() {
    const nextState = !this.state.toggleOpen;
    this.setState({toggleOpen: nextState});
  }

  showUpdateForm() {
    if(this.state.toggleOpen) {
      return(
        <ReviewForm
          formType="update"
          sofaId={this.props.sofaId}
          review={this.props.review}
          updateReview={this.props.updateReview}
          toggleForm={this.toggleForm}/>
      );
    }
  }

  render() {
    return(
      <li className="review-index-item">
        <div className="review-item-body">{this.props.review.body}</div>
        <div className="review-item-author">Review by: {this.props.review.user.first_name} {this.props.review.user.last_name}</div>
        <div className="review-item-content">
          {this.ownReview()}
          {this.showUpdateForm()}
        </div>
      </li>
    );
  }
}

export default ReviewIndexItem;
