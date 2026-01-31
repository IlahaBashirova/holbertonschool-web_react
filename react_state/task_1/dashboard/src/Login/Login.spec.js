import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("Submit button is disabled by default", () => {
    render(<Login />);
    const submit = screen.getByRole("button", { name: /ok/i });
    expect(submit).toBeDisabled();
  });

  test("Submit button becomes enabled only after email and password meet requirements", () => {
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button", { name: /ok/i });

    // Still disabled if only email is valid
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    expect(submit).toBeDisabled();

    // Still disabled if password is too short
    fireEvent.change(passwordInput, { target: { value: "123" } });
    expect(submit).toBeDisabled();

    // Enabled when password >= 8 and email valid
    fireEvent.change(passwordInput, { target: { value: "12345678" } });
    expect(submit).toBeEnabled();
  });
});
