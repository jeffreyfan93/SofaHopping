import React from 'react';
import merge from 'lodash/merge';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.review;

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "add") {
      let review = merge({}, this.state, {user_id: this.props.currentUserId, sofa_id: this.props.sofaId});

      this.props.addReview(review).then(this.props.toggleForm());
    } else {
      this.props.updateReview(this.state).then(this.props.toggleForm());
    }
  }

  formClassName() {
    if(this.props.formType === "add") {
      return("review-form-add");
    } else {
      return("review-form-update");
    }
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={this.formClassName()}>
        <div className="review-form-input">
          <textarea
            type="text"
            value={this.state.body}
            onChange={this.update('body')}
            className="review-form-body"/>
        </div>
        <div className="review-form-submit">
          <button type="submit" className="review-form-submit-button">Submit Review</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
