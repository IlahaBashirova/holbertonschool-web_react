import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import AppContext, { defaultUser } from "../Context/context";

describe("Header - Log out section", () => {
  test("logoutSection is NOT rendered with default context", () => {
    render(
      <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    expect(document.getElementById("logoutSection")).toBeNull();
  });

  test("logoutSection IS rendered when user is logged in", () => {
    const user = { email: "test@mail.com", password: "12345678", isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );

    expect(document.getElementById("logoutSection")).not.toBeNull();
    expect(screen.getByText(/Welcome test@mail\.com/i)).toBeInTheDocument();
    expect(screen.getByText("logout")).toBeInTheDocument();
  });

  test("clicking logout calls logOut from context", () => {
    const logOutSpy = jest.fn();
    const user = { email: "test@mail.com", password: "12345678", isLoggedIn: true };

    render(
      <AppContext.Provider value={{ user, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );

    fireEvent.click(screen.getByText("logout"));
    expect(logOutSpy).toHaveBeenCalledTimes(1);
  });
});
