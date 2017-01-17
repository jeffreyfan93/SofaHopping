import React from 'react';
import { Link } from 'react-router';
import SofaFormContainer from './sofa_form_container';

class MySofaIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleOpen: false,
    };

    this.removeSofa = this.removeSofa.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  removeSofa() {
    this.props.deleteSofa(this.props.sofa.id);
  }

  toggleForm() {
    const status = !this.state.toggleOpen;
    this.setState({toggleOpen: status});
  }

  showForm() {
    if (this.state.toggleOpen) {
      return(<SofaFormContainer formType='update' sofa={this.props.sofa} toggleForm={this.toggleForm}/>);
    }
  }

  render() {
    const { address,
            city,
            state,
            zip,
            num_of_guests,
            picture,
            id } = this.props.sofa;
    return(
      <li className="user-sofa">
        <div className="user-sofa-info">
          <div className="user-sofa-picture"><img src={picture} /></div>
          <div className="user-sofa-info-right">
            <div className="user-sofa-address">
              <div>{address}</div>
              <div>{city}, {state}, {zip}</div>
            </div>
            <div className="user-num-guests">Spots available: {num_of_guests}</div>
          </div>
        </div>
        <button className="user-reviews">Reviews</button>
        <div className="user-sofa-buttons">
          <button onClick={this.toggleForm} className="user-sofa-button">Update Sofa</button>
          <button onClick={this.removeSofa} className="user-sofa-button">Remove Sofa</button>
          <div>{this.showForm()}</div>
        </div>
      </li>
    );
  }
}

export default MySofaIndexItem;
