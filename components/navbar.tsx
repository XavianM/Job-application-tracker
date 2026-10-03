"use client";

import { useState } from "react";
import Brand from "./brand";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Tracker", href: "#tracker" },
  { label: "Sign In", href: "#get-started" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="relative mx-auto w-[calc(100%-32px)] max-w-[1344px] pt-3">
      <div
        className="
          flex items-center justify-between gap-4
          rounded-[48px] border border-white/30
          bg-white/5 px-6 py-5
          shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(5,46,26,0.08)]
          backdrop-blur-xl
          sm:px-12
        "
      >
        <Brand />

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-base font-medium text-gray-900 md:flex lg:gap-10"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#get-started"
            className="rounded-full bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeMenu();
          }}
          className="flex size-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full text-white transition hover:bg-white/10 md:hidden"
        >
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-current" />
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-current" />
          <span aria-hidden="true" className="h-0.5 w-6 rounded-full bg-current" />
        </button>
      </div>

      {/* Mobile dropdown */}
<div
  id="mobile-navigation"
  aria-hidden={!menuOpen}
  inert={!menuOpen}
  onKeyDown={(event) => {
    if (event.key === "Escape") {
      closeMenu();

      document
        .querySelector<HTMLButtonElement>(
          'button[aria-controls="mobile-navigation"]',
        )
        ?.focus();
    }
  }}
  className={`
    absolute left-0 right-0 top-full z-50 mt-3
    grid transition-[grid-template-rows,opacity,transform]
    duration-300 ease-in-out
    motion-reduce:transition-none md:hidden
    ${
      menuOpen
        ? "grid-rows-[1fr] translate-y-0 opacity-100"
        : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0"
    }
  `}
>
  <div className="min-h-0 overflow-hidden rounded-3xl">
    <nav
      aria-label="Mobile navigation"
      className="
        rounded-3xl border border-white/30
        bg-white/10 p-4 text-white backdrop-blur-xl
        shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(5,46,26,0.12)]
      "
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={closeMenu}
          className="block rounded-xl px-4 py-3 transition hover:bg-white/10"
        >
          {link.label}
        </a>
      ))}

      <a
        href="#get-started"
        onClick={closeMenu}
        className="mt-3 block rounded-full bg-gray-900 px-6 py-3 text-center font-semibold transition hover:bg-gray-800"
      >
        Get Started
      </a>
    </nav>
  </div>
</div>
</header>
  );
}