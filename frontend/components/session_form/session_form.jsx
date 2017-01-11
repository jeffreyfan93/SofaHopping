import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", password: "", first_name: "", last_name: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  navLink() {
    if (this.props.formType === 'login') {
      return (
        <div>
          <p>Don't have an account?</p>
          <Link to="/signup">Join</Link>
        </div>
      );
    } else {
      return (
        <div>
          <div>Already a member?</div>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }

  header() {
    if (this.props.formType === 'login') {
      return ("Log in to SofaHopping");
    } else {
      return ("Join SofaHopping for free!");
    }
  }

  joinName() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.first_name}
            onChange={this.update('first_name')} />

          <input
            type="text"
            placeholder="Last Name"
            value={this.state.last_name}
            onChange={this.update('last_name')} />
        </div>
      );
    }
  }

  submitButton() {
    if (this.props.formType === 'login') {
      return("Log In");
    } else {
      return("Join");
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        {this.header()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="login-form">
            {this.joinName()}
            <input
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.update('email')} />
            <br/>
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update('password')} />
            <br/>
            <input type="submit" value={this.submitButton()}></input>
            <br/>
            {this.renderErrors()}
          </div>
        </form>
        <div>
          {this.navLink()}
        </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
