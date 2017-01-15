import { connect } from 'react-redux';
import { fetchSofas } from '../../actions/sofa_actions';
import SofaIndex from './sofa_index';

const mapStateToProps = state => ({
  sofas: Object.keys(state.sofas).map(id => state.sofas[id])
});

const mapDispatchToProps = dispatch => ({
  fetchSofas: () => dispatch(fetchSofas())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SofaIndex);
