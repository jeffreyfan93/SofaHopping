import { connect } from 'react-redux';
import { fetchSofas } from '../../actions/sofa_actions';
import SofaIndex from './sofa_index';
import { selectNotMySofas } from '../selectors/sofa_selector';

const mapStateToProps = state => {
  return ({
    sofas: selectNotMySofas(state.sofas, state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSofas: () => dispatch(fetchSofas())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SofaIndex);
