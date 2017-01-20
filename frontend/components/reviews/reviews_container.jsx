import { connect } from 'react-redux';
import ReviewIndex from './review_index';

import { fetchReviews, addReview, updateReview, deleteReview } from '../../actions/review_actions';
import { selectReviews } from '../selectors/review_selector';

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state.reviews, ownProps.sofa.id),
  currentUserId: state.session.currentUser.id,
  sofaId: ownProps.sofa.id
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: () => dispatch(fetchReviews()),
  addReview: review => dispatch(addReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
