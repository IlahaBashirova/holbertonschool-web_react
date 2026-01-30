import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t-4 border-[var(--main-color)] bg-white py-4 text-center italic">
      <p>Copyright {new Date().getFullYear()} - Holberton School</p>
    </footer>
  );
}
