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
    this.updateEnableSubmit = this.updateEnableSubmit.bind(this);
  }

  isValidEmail(email) {
    // simple + solid email validation for this project
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  updateEnableSubmit() {
    const { email, password } = this.state;
    const enableSubmit = this.isValidEmail(email) && password.length >= 8;
    this.setState({ enableSubmit });
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value }, this.updateEnableSubmit);
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value }, this.updateEnableSubmit);
  }

  handleLoginSubmit(e) {
    e.preventDefault(); // ✅ must NOT reload page
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handleChangePassword}
          />

          {/* requirement: replace button with input type submit */}
          <input type="submit" value="OK" disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
