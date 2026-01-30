import React from "react";

export default function Login() {
  return (
    <main className="border-t-4 border-[var(--main-color)] px-12 py-8">
      <p className="font-semibold">Log in to continue</p>

      <form className="mt-6 flex flex-wrap items-center gap-4">
        <label htmlFor="email" className="flex items-center gap-2">
          <span>Email</span>
          <input
            id="email"
            type="email"
            className="h-6 w-28 border border-gray-400 px-2"
          />
        </label>

        <label htmlFor="password" className="flex items-center gap-2">
          <span>Password</span>
          <input
            id="password"
            type="password"
            className="h-6 w-28 border border-gray-400 px-2"
          />
        </label>

        <button
          type="submit"
          className="h-6 border border-gray-400 px-2 text-sm"
        >
          OK
        </button>
      </form>
    </main>
  );
}
