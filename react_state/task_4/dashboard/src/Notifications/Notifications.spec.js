import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Notifications from "./Notifications";

test("calls handleDisplayDrawer when clicking on the menu item", () => {
  const handleDisplayDrawer = jest.fn();

  render(
    <Notifications
      displayDrawer={false}
      notifications={[]}
      handleDisplayDrawer={handleDisplayDrawer}
    />
  );

  fireEvent.click(screen.getByText("Your notifications"));
  expect(handleDisplayDrawer).toHaveBeenCalled();
});

test("calls handleHideDrawer when clicking on the close button", () => {
  const handleHideDrawer = jest.fn();

  render(
    <Notifications
      displayDrawer={true}
      notifications={[{ id: 1, type: "default", value: "Test" }]}
      handleHideDrawer={handleHideDrawer}
    />
  );

  fireEvent.click(screen.getByRole("button", { name: /close/i }));
  expect(handleHideDrawer).toHaveBeenCalled();
});
