import React from 'react';
import { connect } from 'react-redux';
import Sofas from './sofas';
import { selectNotMySofas } from '../selectors/sofa_selector';
import { fetchSearchSofas } from '../../actions/sofa_actions';


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
)(Sofas);

// import SearchContainer from './search_container';
// import SofaIndexContainer from './sofa_index_container';
// import MapContainer from './map_container';
//
// const SofasContainer = () => {
//   return (
//     <div className="sofa-screen">
//       <div className="sofa-container">
//         <div className="sofa-container-top">
//           <SearchContainer />
//         </div>
//         <div className="sofa-container-bottom">
//           <div className="sofa-container-bottom-left">
//             <SofaIndexContainer />
//           </div>
//           <div className="sofa-container-bottom-right">
//             <MapContainer />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default SofasContainer;
