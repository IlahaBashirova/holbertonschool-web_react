import React from "react";
import logo from "../assets/holberton-logo.jpg";
import AppContext from "../Context/context";

class Header extends React.Component {
  static contextType = AppContext;

  handleLogoutClick = (e) => {
    e.preventDefault();
    this.context.logOut();
  };

  render() {
    const { user } = this.context;

    return (
      <>
        <header className="flex items-center gap-6 p-6">
          <img src={logo} alt="Holberton logo" className="h-16 w-auto" />
          <h1 className="text-4xl font-bold text-[var(--main-color)]">
            School dashboard
          </h1>
        </header>

        {user?.isLoggedIn && (
          <section id="logoutSection" className="px-6">
            <p>
              Welcome {user.email} (
              <a href="#" onClick={this.handleLogoutClick}>
                logout
              </a>
              )
            </p>
          </section>
        )}
      </>
    );
  }
}

export default Header;
