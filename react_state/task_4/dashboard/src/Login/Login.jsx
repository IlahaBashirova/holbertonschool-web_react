import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  static defaultProps = {
    email: '',
    password: '',
    logIn: () => {},
  };

  static propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    logIn: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      password: props.password,
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  isValid(email, password) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return emailOk && password.length >= 8;
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState((prev) => ({
      email,
      enableSubmit: this.isValid(email, prev.password),
    }));
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState((prev) => ({
      password,
      enableSubmit: this.isValid(prev.email, password),
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
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </label>

          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
