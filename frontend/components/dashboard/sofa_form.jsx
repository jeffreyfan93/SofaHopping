import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';

import { removeSofaErrors } from '../../actions/sofa_actions';

class SofaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.sofa;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    this.formTitle = this.formTitle.bind(this);
    this.submitButtonText = this.submitButtonText.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors.length === 0) {
      this.props.toggleForm();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let sofa = merge({}, this.state, {user_id: parseInt(this.props.currentUser.id)});
    this.props.action(sofa);
  }

  upload(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(window.cloudinary_options, (error, images) => {
      if (error === null) {
        const img = images[0].url;
        this.setState({picture: img});
      }
    });
  }

  formTitle() {
    if (this.props.formType === 'add') {
      return ("Add a sofa!");
    } else {
      return ("Update your sofa");
    }
  }

  submitButtonText() {
    if (this.props.formType === 'add') {
      return ("Add sofa");
    } else {
      return ("Update sofa");
    }
  }

  renderErrors() {
    return (
      <ul className="sofa-form-errors">
        {this.props.errors.map((error, i) => (
          <li key={i} className="sofa-form-error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="sofa-form-screen">
        <div className="sofa-form-container">
          <form onSubmit={this.handleSubmit} className="sofa-form">
            <div className="sofa-form-title">{this.formTitle()}</div>
            <div className="sofa-form-inputs">
              <input
                type="text"
                placeholder="Address"
                value={this.state.address}
                onChange={this.update('address')}
                className="sofa-form-input" />
              <input
                type="text"
                placeholder="City"
                value={this.state.city}
                onChange={this.update('city')}
                className="sofa-form-input" />
              <input
                type="text"
                placeholder="State"
                value={this.state.state}
                onChange={this.update('state')}
                className="sofa-form-input" />
              <input
                type="text"
                placeholder="Zip"
                value={this.state.zip}
                onChange={this.update('zip')}
                className="sofa-form-input" />

              <select
                value={this.state.num_of_guests}
                onChange={this.update('num_of_guests')}
                className="sofa-form-num-of-guests">
                <option>-- Select Number of Available Sofas --</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <button
                onClick={this.upload}
                className="sofa-form-upload">Upload image</button>
            </div>
            {this.renderErrors()}
            <div>
              <button
                type="Submit"
                className="sofa-form-submit">{this.submitButtonText()}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SofaForm);
