import React from 'react';

const Lessons: React.FC = () => {
  return (
    <section className="full-bleed header-match-bg py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="vintage-headline text-5xl md:text-6xl mb-6">
            SCHEDULE A LESSON
          </h2>
          <div className="vintage-divider max-w-lg mx-auto mb-8"></div>
          <p className="vintage-subheading text-2xl">
            Check availability and book your session online.
          </p>
        </div>

        {/* Booking Button */}
        <div className="bg-white/90 text-green-900 rounded-lg shadow-xl p-10 mb-16 text-center">
          <h3 className="text-3xl font-bold mb-4">Book a Lesson</h3>
          <p className="vintage-body text-lg mb-6">
            Opens the booking page in a new tab.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-2xl px-10 py-4 inline-block"
          >
            Book Now
          </a>
        </div>

        {/* Certifications */}
        <div className="bg-white/90 text-green-900 p-8 rounded-lg shadow-xl mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Certifications</h3>
          <ul className="list-disc list-inside text-left text-xl space-y-4">
            <li>PTR Certified – Adult Development</li>
            <li>USTA Safe Play Certified</li>
            <li>First Aid & CPR Certified</li>
          </ul>
        </div>

        {/* Pricing */}
        <div className="bg-white/90 text-green-900 p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-6 text-center">🎾 Tennis Lesson Pricing Structure</h3>
          <ul className="list-disc list-inside text-left text-xl space-y-4">
            <li><strong>1-on-1 Private Lesson:</strong> $25 per hour</li>
            <li><strong>Semi-Private (2 players):</strong> $18 per person ($36/hr)</li>
            <li><strong>Semi-Private (3 players):</strong> $15 per person ($45/hr)</li>
            <li><strong>Small Group (4 players):</strong> $12 per person ($48/hr)</li>
            <li><strong>Small Group (5 players):</strong> $10 per person ($50/hr)</li>
            <li><strong>Small Group (6 players):</strong> $9 per person ($54/hr)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
