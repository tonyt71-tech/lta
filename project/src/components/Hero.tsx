import React from 'react';

const BOOK_URL =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="full-bleed header-match-bg min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      <div className="absolute inset-0 hero-overlay"></div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32">
        <h1 className="vintage-headline text-4xl md:text-6xl mb-8 leading-tight">
          LAWTON
          <br />
          <span className="text-yellow-300">TENNIS</span>
          <br />
          <span className="text-yellow-200">ACADEMY</span>
        </h1>
        
        <div className="vintage-divider my-8 max-w-md mx-auto"></div>
        
        <p className="vintage-subheading text-2xl md:text-3xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Classic Tennis Instruction in the Heart of Southwest Oklahoma
        </p>

        {/* Schedule button now links out */}
        <div className="mb-16">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-3xl md:text-4xl px-12 py-6 inline-block"
          >
            SCHEDULE A LESSON
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="vintage-subheading text-3xl mb-4">PRIVATE LESSONS</h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              One-on-one instruction tailored to your skill level. Perfect for beginners 
              or advanced players refining technique.
            </p>
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl">$25</span>
              <span className="vintage-body ml-2">per hour</span>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-secondary w-full py-3 text-xl text-center inline-block"
            >
              BOOK PRIVATE
            </a>
          </div>

          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="vintage-subheading text-3xl mb-4">SMALL GROUP LESSONS</h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              Learn with friends in our small group sessions. 3–6 students for attention and camaraderie.
            </p>
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl">$9–$15</span>
              <span className="vintage-body ml-2">per person/hour</span>
            </div>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-button-secondary w-full py-3 text-xl text-center inline-block"
            >
              BOOK GROUP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
