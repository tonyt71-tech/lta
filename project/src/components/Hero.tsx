import React from 'react';

const BOOK_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf';

const Hero = () => {
  return (
    <section
      id="home"
      className="full-bleed min-h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        // Wimbledon gradient: left purple -> right green
        background: 'linear-gradient(90deg, var(--wim-purple) 0%, var(--wim-green) 100%)',
      }}
    >
      {/* optional dark overlay for contrast */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32">
        {/* Headline */}
        <h1 className="vintage-headline text-4xl md:text-6xl mb-8 leading-tight">
          LAWTON
          <br />
          <span className="text-yellow-300">TENNIS</span>
          <br />
          <span className="text-yellow-200">ACADEMY</span>
        </h1>

        <div className="vintage-divider my-8 max-w-md mx-auto" />

        <p className="vintage-subheading text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Classic Tennis Instruction in the Heart of Southwest Oklahoma
        </p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Private Lessons */}
          <div className="vintage-card bg-white/90 rounded-lg p-8" style={{ color: 'var(--wim-green)' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="vintage-subheading text-3xl mb-4">PRIVATE LESSONS</h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              One-on-one instruction tailored to your skill level. Perfect for beginners
              or advanced players refining technique.
            </p>
            <div className="text-center mb-2">
              <span className="vintage-subheading text-2xl">$25</span>
              <span className="vintage-body ml-2">per hour</span>
            </div>
          </div>

          {/* Small Group Lessons */}
          <div className="vintage-card bg-white/90 rounded-lg p-8" style={{ color: 'var(--wim-green)' }}>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="vintage-subheading text-3xl mb-4">SMALL GROUP LESSONS</h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              Learn with friends in our small group sessions. 3–6 students for attention and camaraderie.
            </p>
            <div className="text-center mb-2">
              <span className="vintage-subheading text-2xl">$9–$15</span>
              <span className="vintage-body ml-2">per person/hour</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Schedule a tennis lesson"
            className="inline-block rounded-2xl px-12 py-5 text-2xl font-extrabold tracking-wide
                       bg-gradient-to-r from-[var(--brand-accent)]
                       via-[var(--brand-accent2)] to-[var(--brand-accent)]
                       animate-gradient-x transition-transform duration-300 ease-out
                       hover:scale-105 hover:brightness-110
                       shadow-[0_10px_24px_rgba(0,0,0,.25)] border-2 border-yellow-300/60"
            style={{ color: 'var(--wim-green)' }}
          >
            SCHEDULE A LESSON
          </a>
        </div>

        {/* Contact line */}
        <div className="mt-10 text-center">
          <p className="vintage-body text-xl text-yellow-200">
            Questions? (580) 483-3342 • lawtontennisacademy@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
