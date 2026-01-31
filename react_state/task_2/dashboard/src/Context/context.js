import React from "react";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const defaultContext = {
  user: defaultUser,
  logOut: () => {},
};

const AppContext = React.createContext(defaultContext);

export default AppContext;
