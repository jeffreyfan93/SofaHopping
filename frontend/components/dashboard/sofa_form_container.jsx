import { connect } from 'react-redux';
import SofaForm from './sofa_form';
import { addSofa, updateSofa } from '../../actions/sofa_actions';

const mapStateToProps = (state, ownProps) => {
  if (ownProps.formType === 'add') {
    const sofa = { address: "", city: "", state: "", zip: "", num_of_guests: ""};
    return ({
      currentUser: state.session.currentUser,
      formType: 'add',
      sofa
    });
  } else {
    return ({
      currentUser: state.session.currentUser,
      formType: 'update',
      sofa: ownProps.sofa
    });
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === 'add' ? addSofa : updateSofa;
  if (ownProps.formType === 'add') {
    return({
      action: sofa => dispatch(action(sofa))
    });
  } else {
    return({
      action: sofa => dispatch(action(sofa))
    });
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SofaForm);
