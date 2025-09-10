import React from 'react';

const About = () => {
  return (
    <section id="about" className="full-bleed header-match-bg py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <div className="text-center mb-10">
          <h2 className="vintage-headline text-5xl md:text-6xl mb-4">
            CLASSIC TENNIS TRADITION
          </h2>
          <div className="vintage-divider max-w-lg mx-auto"></div>
        </div>

        {/* Technology Advantage */}
        <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8 mb-6 shadow-lg">
          <h3 className="vintage-subheading text-3xl mb-4 text-center">
            🎾 Next-Level Coaching with Pro-Grade AI Video Analysis
          </h3>
          <p className="vintage-body text-lg leading-relaxed mb-6 text-center">
            One of the few programs in the region using the same AI-powered video analysis trusted by top pros.
          </p>
        </div>

        {/* Safe Play Certification Badge */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-800 text-yellow-200 px-4 py-2 rounded-md text-xl font-semibold shadow-md">
            ✅ USTA Safe Play Certified
          </span>
        </div>

        {/* Pricing Title */}
        <div className="text-center mb-8">
          <h3 className="vintage-headline text-4xl md:text-5xl mb-3">
            LESSON OPTIONS &amp; PRICING
          </h3>
          <div className="vintage-divider max-w-md mx-auto"></div>
        </div>

        {/* Rest of the About component… */}
      </div>
    </section>
  );
};

export default About;
