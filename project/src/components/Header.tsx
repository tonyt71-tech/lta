import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Full-bleed green bar */}
      <div className="header-glass">
        {/* Centered content block */}
        <div className="page-wrap">
          {/* On desktop we center EVERYTHING as one group; on mobile we stack centered */}
          <div className="flex flex-col items-center gap-3 py-2 md:flex-row md:items-center md:justify-center md:gap-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full grid place-items-center"
                style={{ backgroundColor: "var(--brand-accent)" }}
              >
                <span className="text-xl" style={{ color: "#0f3b25" }}>
                  🎾
                </span>
              </div>
              <span
                className="text-yellow-100 text-xl"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Lawton Tennis Academy TEST
              </span>
            </div>

            {/* Desktop nav — centered with brand */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-yellow-100 hover:text-yellow-300"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-yellow-100 hover:text-yellow-300"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-yellow-100 hover:text-yellow-300"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Contact
              </a>
              <a href="#schedule" className="btn-primary">Schedule</a>
            </nav>

            {/* Mobile toggle (kept to the right of the centered block) */}
            <button
              className="md:hidden self-end text-yellow-200"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu (centered) */}
        {open && (
          <div className="md:hidden border-t border-yellow-500/30">
            <div className="page-wrap py-3 flex flex-col items-center gap-3">
              <a className="text-yellow-100" href="#home" style={{ fontFamily: "Crimson Text, serif" }}>Home</a>
              <a className="text-yellow-100" href="#about" style={{ fontFamily: "Crimson Text, serif" }}>About</a>
              <a className="text-yellow-100" href="#contact" style={{ fontFamily: "Crimson Text, serif" }}>Contact</a>
              <a href="#schedule" className="btn-primary w-max">Schedule</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
