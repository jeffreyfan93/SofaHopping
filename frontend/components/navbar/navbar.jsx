import React from 'react';
import { Link, withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.loginButtons = this.loginButtons.bind(this);
    this.splashOnLogout = this.splashOnLogout.bind(this);
    this.logoLink = this.logoLink.bind(this);
    this.dashboardOnLogin = this.dashboardOnLogin.bind(this);
  }


  splashOnLogout() {
    this.props.router.push("/");
    this.props.logout();
  }

  dashboardOnLogin() {
    const guest = {email:'guest', password:'password'};
    this.props.router.push("/dashboard");
    this.props.login(guest);
  }

  logoLink() {
    if (this.props.currentUser) {
      this.props.router.push("/dashboard");
    } else {
      this.props.router.push("/");
    }
  }

  loginButtons() {
    if (this.props.currentUser) {
      return (
        <div className="nav-buttons">
          <div>
            <Link to="/dashboard" className="nav-button">Dashboard</Link>
          </div>
          <div>
            <Link to="/sofas" className="nav-button">Sofas</Link>
          </div>
          <div>
            <button onClick={this.splashOnLogout} className="nav-button-logout">Log out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="nav-buttons">
          <div>
            <Link to="/signup" className="nav-button-join">Join</Link>
          </div>
          <div>
            <Link to="/login" className="nav-button-login">Log In</Link>
          </div>
          <div>
            <button onClick={this.dashboardOnLogin} className="nav-button-login">Guest</button>
          </div>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="navbar">
        <button onClick={this.logoLink} className="nav-to-home">Sofahopping</button>
        <div>
          {this.loginButtons()}
        </div>
      </div>
    );
  }

}

export default withRouter(Navbar);
