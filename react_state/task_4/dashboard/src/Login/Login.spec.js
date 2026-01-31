import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  it("calls login prop with email and password when form is submitted", () => {
    const loginSpy = jest.fn();

    render(<Login login={loginSpy} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "12345678" },
    });

    fireEvent.click(screen.getByDisplayValue("OK"));

    expect(loginSpy).toHaveBeenCalledTimes(1);
    expect(loginSpy).toHaveBeenCalledWith("test@example.com", "12345678");
  });
});
