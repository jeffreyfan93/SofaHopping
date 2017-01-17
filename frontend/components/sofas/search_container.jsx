import { connect } from 'react-redux';
import Search from './search';
import { fetchSearchSofas } from '../../actions/sofa_actions';

const mapStateToProps = state => ({
  sofas: state.sofas
});

const mapDispatchToProps = dispatch => ({
  fetchSearchSofas: (city, guests) => dispatch(fetchSearchSofas(city, guests))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
