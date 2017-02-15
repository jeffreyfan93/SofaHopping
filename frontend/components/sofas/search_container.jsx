import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchSofas } from '../../actions/sofa_actions';
import { selectNotMySofas } from '../selectors/sofa_selector';


const mapStateToProps = state => {
  debugger
  return({
    sofas: selectNotMySofas(state.sofas, state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchSearchSofas: (city, guests) => dispatch(fetchSearchSofas(city, guests))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
