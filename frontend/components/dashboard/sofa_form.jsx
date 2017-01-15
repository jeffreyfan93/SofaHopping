import React from 'react';
import merge from 'lodash/merge';
import { withRouter } from 'react-router';


class SofaForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.sofa;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    this.formTitle = this.formTitle.bind(this);
    this.submitButtonText = this.submitButtonText.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const sofa = merge({}, this.state, {user_id: parseInt(this.props.currentUser.id)});
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

  render() {
    return(
      <div className="sofa-form-screen">
        <div className="sofa-form-container">
          <div>{this.formTitle()}</div>
          <form onSubmit={this.handleSubmit} className="sofa-form">
            <input
              type="text"
              placeholder="Address"
              value={this.state.address}
              onChange={this.update('address')} />
            <input
              type="text"
              placeholder="City"
              value={this.state.city}
              onChange={this.update('city')} />
            <input
              type="text"
              placeholder="State"
              value={this.state.state}
              onChange={this.update('state')} />
            <input
              type="text"
              placeholder="Zip"
              value={this.state.zip}
              onChange={this.update('zip')} />

            <select value={this.state.num_of_guests} onChange={this.update('num_of_guests')}>
              <option>-- Select Number of Sofas Available --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <button onClick={this.upload}>Upload image</button>
            <button type="Submit">{this.submitButtonText()}</button>
          </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SofaForm);
