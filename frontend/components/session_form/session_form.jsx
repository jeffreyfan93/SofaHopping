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
        <div className="login-signup-navlink">
          <div>Don't have an account{'?'}</div>
          <Link to="/signup" className="navlink-button">Join</Link>
        </div>
      );
    } else {
      return (
        <div className="login-signup-navlink">
          <div>Already a member{'?'}</div>
          <Link to="/login" className="navlink-button">Log In</Link>
        </div>
      );
    }
  }

  header() {
    if (this.props.formType === 'login') {
      return (
        <div className="login-signup-header">
          Log in to Sofahopping
        </div>
      );
    } else {
      return (
        <div className="login-signup-header">
          Join Sofahopping for free!
        </div>
      );
    }
  }

  joinName() {
    if (this.props.formType === 'signup') {
      return (
        <div>
          <input
            type="text"
            placeholder="First name"
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className="first-last-input" />

          <input
            type="text"
            placeholder="Last name"
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className="first-last-input" />
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
      <ul className="login-signup-errors">
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
      <div className="login-signup-screen">
        <div className="login-form-container">
          <div>
            {this.header()}
            <form onSubmit={this.handleSubmit} className="login-form-box">
                {this.joinName()}
                <input
                  type="text"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="email-password-input" />
                <br/>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="email-password-input" />
                <br/>
                <input type="submit" value={this.submitButton()} className="login-signup-submit"></input>
                <br/>
                {this.renderErrors()}
            </form>
          </div>
          <div>
            {this.navLink()}
          </div>
        </div>
      </div>

    );
  }

}

export default withRouter(SessionForm);
