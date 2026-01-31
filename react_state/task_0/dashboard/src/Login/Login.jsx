import React from "react";

export default function Login() {
  return (
    <main className="border-t-4 border-[var(--main-color)] px-12 py-8 max-[520px]:px-6">
      <p className="font-semibold">Log in to continue</p>

      <form className="mt-6 flex flex-col gap-4 min-[521px]:flex-row min-[521px]:items-center">
        <label
          htmlFor="email"
          className="flex flex-col gap-2 min-[521px]:flex-row min-[521px]:items-center"
        >
          <span>Email</span>
          <input
            id="email"
            type="email"
            className="h-8 w-full border border-gray-400 px-2 min-[521px]:h-6 min-[521px]:w-28"
          />
        </label>

        <label
          htmlFor="password"
          className="flex flex-col gap-2 min-[521px]:flex-row min-[521px]:items-center"
        >
          <span>Password</span>
          <input
            id="password"
            type="password"
            className="h-8 w-full border border-gray-400 px-2 min-[521px]:h-6 min-[521px]:w-28"
          />
        </label>

        <button
          type="submit"
          className="h-8 border border-gray-400 px-3 text-sm min-[521px]:h-6 min-[521px]:px-2"
        >
          OK
        </button>
      </form>
    </main>
  );
}
