import React from "react";

export default function Login() {
  return (
    <main className="border-t-4 border-[var(--main-color)] px-12 py-8 max-[520px]:px-4">
      <p className="font-semibold">Log in to continue</p>

      <form className="mt-6 flex flex-wrap items-center gap-4 max-[520px]:flex-col max-[520px]:items-start">
        <label htmlFor="email" className="flex items-center gap-2 max-[520px]:w-full">
          <span className="min-w-[72px]">Email</span>
          <input
            id="email"
            type="email"
            className="h-6 w-28 border border-gray-400 px-2 max-[520px]:w-full"
          />
        </label>

        <label htmlFor="password" className="flex items-center gap-2 max-[520px]:w-full">
          <span className="min-w-[72px]">Password</span>
          <input
            id="password"
            type="password"
            className="h-6 w-28 border border-gray-400 px-2 max-[520px]:w-full"
          />
        </label>

        <button
          type="submit"
          className="h-6 border border-gray-400 px-2 text-sm max-[520px]:w-full"
        >
          OK
        </button>
      </form>
    </main>
  );
}
