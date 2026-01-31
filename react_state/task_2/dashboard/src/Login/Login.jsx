import React from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email || "",
      password: props.password || "",
      enableSubmit: false,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  isValidEmail(email) {
    // simple/standard email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  updateEnableSubmit(nextState) {
    const emailOk = this.isValidEmail(nextState.email);
    const passwordOk = nextState.password.length >= 8;
    this.setState({ enableSubmit: emailOk && passwordOk });
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email }, () => this.updateEnableSubmit(this.state));
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState({ password }, () => this.updateEnableSubmit(this.state));
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password, enableSubmit } = this.state;
    if (!enableSubmit) return;

    this.props.login(email, password);
  }

  render() {
    const { enableSubmit, email, password } = this.state;

    return (
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.handleChangePassword}
          />

          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  login: () => {},
  email: "",
  password: "",
};

export default Login;
