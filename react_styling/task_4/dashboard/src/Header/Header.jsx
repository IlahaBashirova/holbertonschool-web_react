import React from "react";
import logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <header className="flex items-center gap-6 p-6 max-[520px]:flex-col max-[520px]:items-center">
      <img
        src={logo}
        alt="Holberton logo"
        className="h-16 w-auto max-[520px]:h-24"
      />
      <h1 className="text-4xl font-bold text-[var(--main-color)] max-[520px]:text-3xl">
        School dashboard
      </h1>
    </header>
  );
}
