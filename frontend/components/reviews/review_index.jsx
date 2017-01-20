import React from 'react';
import ReviewIndexItem from './review_index_item';
import ReviewForm from './review_form';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOpen: false
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews();
  }

  toggleForm() {
    const nextState = !this.state.toggleOpen;
    this.setState({toggleOpen: nextState});
  }

  reviewForm() {
    const review = { body: ""};
    if(this.state.toggleOpen) {
      return(
        <ReviewForm
          formType="add"
          sofaId={this.props.sofaId}
          currentUserId={this.props.currentUserId}
          review={review}
          addReview={this.props.addReview}
          toggleForm={this.toggleForm} />
      );
    }
  }

  render() {
    return(
      <div className="reviews-container">
        <ul className="reviews-index">
          {this.props.reviews.map(review => (
            <ReviewIndexItem
              key={review.id}
              review={review}
              deleteReview={this.props.deleteReview}
              updateReview={this.props.updateReview}
              currentUserId={this.props.currentUserId}
              sofaId={this.props.sofaId}
              fetchReviews={this.props.fetchReviews} />
          ))}
        </ul>
        <button onClick={this.toggleForm} className="reviews-add-review">Write a Review</button>
        {this.reviewForm()}
      </div>
    );
  }
}

export default ReviewIndex;
