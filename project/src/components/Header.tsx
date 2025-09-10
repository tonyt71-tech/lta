import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const BOOK_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="header-glass">
        <div className="page-wrap">
          <div className="flex flex-col items-center gap-3 py-2 md:flex-row md:items-center md:justify-center md:gap-8">
            {/* Brand */}
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Lawton Tennis Academy"
                className="h-10 w-10 rounded-full logo-ring"
              />
              <span
                className="text-yellow-100 text-xl brand-title"
                style={{ fontFamily: "Crimson Text, serif" }}
              >
                Lawton Tennis Academy
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-yellow-100 hover:text-yellow-300" style={{ fontFamily: "Crimson Text, serif" }}>Home</a>
              <a href="#about" className="text-yellow-100 hover:text-yellow-300" style={{ fontFamily: "Crimson Text, serif" }}>About</a>
              <a href="#contact" className="text-yellow-100 hover:text-yellow-300" style={{ fontFamily: "Crimson Text, serif" }}>Contact</a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Schedule</a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden self-end text-yellow-200"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-yellow-500/30">
            <div className="page-wrap py-3 flex flex-col items-center gap-3">
              <a className="text-yellow-100" href="#home" style={{ fontFamily: "Crimson Text, serif" }}>Home</a>
              <a className="text-yellow-100" href="#about" style={{ fontFamily: "Crimson Text, serif" }}>About</a>
              <a className="text-yellow-100" href="#contact" style={{ fontFamily: "Crimson Text, serif" }}>Contact</a>
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-max">Schedule</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
