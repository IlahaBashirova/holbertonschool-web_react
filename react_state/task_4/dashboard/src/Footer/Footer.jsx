import React, { useContext } from "react";
import AppContext from "../Context/context";

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer className="App-footer">
      <p>Copyright 2026 - Holberton School</p>

      {user && user.isLoggedIn && (
        <p>
          <a href="#">Contact us</a>
        </p>
      )}
    </footer>
  );
}
