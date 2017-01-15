import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { addSofa, updateSofa, deleteSofa, fetchSofas } from '../../actions/sofa_actions';
import { selectCurrentUserSofas } from '../selectors/sofa_selector';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentUserSofas: selectCurrentUserSofas(state.sofas, state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  addSofa: sofa => dispatch(addSofa(sofa)),
  updateSofa: sofa => dispatch(updateSofa(sofa)),
  deleteSofa: id => dispatch(deleteSofa(id)),
  fetchSofas: () => dispatch(fetchSofas())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
