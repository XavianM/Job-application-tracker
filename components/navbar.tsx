import Brand from "./brand";

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-6 sm:px-8">
      <Brand />

      <nav
        aria-label="Main navigation"
        className="flex flex-wrap items-center gap-5 text-sm font-medium text-white sm:gap-8"
      >
        <a href="#how-it-works" className="hover:text-lime-200">
          How it works
        </a>

        <a href="#tracker" className="hover:text-lime-200">
          Tracker
        </a>

        <a href="#get-started" className="hover:text-lime-200">
          Sign In
        </a>

        <a
          href="#get-started"
          className="rounded-full bg-gray-900 px-5 py-3 font-semibold transition hover:bg-gray-800"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}