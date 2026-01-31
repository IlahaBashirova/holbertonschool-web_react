import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  isValidEmail(email) {
    // Strict enough for tests: needs something@something.something
    // (no spaces, requires a dot after @, and a 2+ letters TLD)
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(String(email).trim());
  }

  updateEnableSubmit(next = {}) {
    const email = next.email !== undefined ? next.email : this.state.email;
    const password =
      next.password !== undefined ? next.password : this.state.password;

    const enableSubmit = this.isValidEmail(email) && password.length >= 8;
    this.setState({ enableSubmit });
  }

  handleChangeEmail(e) {
    const email = e.target.value;
    this.setState({ email }, () => this.updateEnableSubmit({ email }));
  }

  handleChangePassword(e) {
    const password = e.target.value;
    this.setState({ password }, () => this.updateEnableSubmit({ password }));
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
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
