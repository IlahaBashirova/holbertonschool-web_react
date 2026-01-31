import React from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);

    this.state = {
      email: props.email,
      password: props.password,
      enableSubmit: false,
    };
  }

  validateForm(email, password) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && password.length >= 8;
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState((prev) => ({
      email,
      enableSubmit: this.validateForm(email, prev.password),
    }));
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState((prev) => ({
      password,
      enableSubmit: this.validateForm(prev.email, password),
    }));
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <form onSubmit={this.handleLoginSubmit}>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            value={password}
            onChange={this.handleChangePassword}
          />
        </label>

        <input type="submit" value="OK" disabled={!enableSubmit} />
      </form>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
};

Login.defaultProps = {
  logIn: () => {},
  email: "",
  password: "",
};

export default Login;
