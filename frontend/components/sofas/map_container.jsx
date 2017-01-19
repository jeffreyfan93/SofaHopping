import { connect } from 'react-redux';
import Map from './map';

import { selectNotMySofas } from '../selectors/sofa_selector';

const mapStateToProps = state => {
  return({
    sofas: selectNotMySofas(state.sofas, state.session.currentUser)
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
