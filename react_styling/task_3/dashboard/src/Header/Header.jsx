import React from "react";
import logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <header className="flex items-center gap-6 p-6">
      <img src={logo} alt="Holberton logo" className="h-16 w-auto" />
      <h1 className="text-4xl font-bold text-[var(--main-color)]">
        School dashboard
      </h1>
    </header>
  );
}
