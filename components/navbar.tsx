import Brand from "./brand";

export default function Navbar() {
  return (
    <header className="mx-auto w-[calc(100%-32px)] max-w-[1344px] pt-3">
      <div
        className="
          flex flex-wrap items-center justify-between gap-6
          rounded-[48px] border border-white/30
          bg-white/5 px-6 py-5
          shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(5,46,26,0.08)]
          backdrop-blur-xl
          sm:px-12
        "
      >
        <Brand />

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-5 text-base font-medium text-gray-900 sm:gap-10"
        >
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>

          <a href="#tracker" className="transition hover:text-white">
            Tracker
          </a>

          <a href="#get-started" className="transition hover:text-white">
            Sign In
          </a>

          <a
            href="#get-started"
            className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}