import React from 'react';

const BOOK_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf';

export default function Footer() {
  return (
    <footer className="full-bleed header-glass text-yellow-200 py-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Academy Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              {/* Logo without yellow box */}
              <div className="w-20 h-20 overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Lawton Tennis Academy logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="vintage-subheading text-4xl text-yellow-300">Lawton Tennis Academy</h3>
            </div>
            <p className="vintage-body opacity-90 text-2xl">
              Classic instruction. Modern tools.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="vintage-subheading text-3xl mb-4 text-yellow-300">Contact</h4>
        <div className="mt-10 text-center">
          <p className="vintage-body text-xl text-yellow-200">
            Questions? (580) 483-3342 • lawtontennisacademy@gmail.com
          </p>
        </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="vintage-subheading text-3xl mb-4 text-yellow-300">Hours</h4>
            <p className="vintage-body opacity-90 text-2xl">Mon–Sat: By appointment</p>
            <p className="vintage-body opacity-90 text-2xl">Sun: Closed</p>
          </div>
        </div>

        <div
          className="mt-10 h-[6px] rounded-full"
          style={{ backgroundImage: 'linear-gradient(90deg, var(--wim-purple), var(--wim-green))' }}
        />

        {/* Schedule button */}
        <div className="text-center mt-10">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a tennis lesson"
            className="inline-block rounded-2xl px-14 py-6 text-3xl font-extrabold tracking-wide
                       bg-gradient-to-r from-[var(--brand-accent)]
                       via-[var(--brand-accent2)] to-[var(--brand-accent)]
                       animate-gradient-x transition-transform duration-300 ease-out
                       hover:scale-105 hover:brightness-110
                       shadow-[0_6px_16px_rgba(0,0,0,.25)] border-4 border-yellow-300/60"
            style={{ color: 'var(--wim-green)' }}
          >
            Schedule Your Lesson
          </a>
        </div>

        <p className="text-center mt-8 text-xl opacity-80">
          © {new Date().getFullYear()} Lawton Tennis Academy
        </p>
      </div>
    </footer>
  );
}
