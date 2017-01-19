import React from 'react';
import merge from 'lodash/merge';
import { Link, withRouter } from 'react-router';

import MySofaIndexItem from './my_sofa_index_item';
import SofaFormContainer from './sofa_form_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOpen: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  toggleForm() {
    if (this.state.toggleOpen) {
      this.props.removeSofaErrors();
    }
    const status = !this.state.toggleOpen;
    this.setState({toggleOpen: status});
  }

  showForm() {
    if (this.state.toggleOpen) {
      return(<SofaFormContainer formType='add' toggleForm={this.toggleForm}/>);
    }
  }

  componentWillMount() {
    this.props.fetchSofas();
  }

  render() {
    if (this.props.currentUser) {
      const { first_name, last_name, picture } = this.props.currentUser;
      return(
        <div className="dashboard-sidebar-container">
          <div className="sidebar-user-info">
            <div className="sidebar-name-status">
              <div className="sidebar-user-name">{first_name} {last_name}</div>
              <div className="sidebar-user-status">Accepting Guests</div>
            </div>
            <div className="sidebar-profile-picture"><img src={this.props.currentUser.picture} /></div>
          </div>
          <div id="sidebar-user-sofas-text">
            <div className="sidebar-user-sofas-text">My Available Sofas</div>
          </div>
          <ul className="sidebar-user-sofas">
            {this.props.currentUserSofas.map(sofa => (
              <MySofaIndexItem
                key={sofa.id}
                sofa={sofa}
                deleteSofa={this.props.deleteSofa}
                updateSofa={this.props.updateSofa} />
            ))}
          </ul>

          <button onClick={this.toggleForm} className="sidebar-user-add-sofa">Host my Sofa</button>
          <div>{this.showForm()}</div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }

  }

}

export default Sidebar;
