import React from 'react';

const About = () => {
  return (
    <section id="about" className="full-bleed header-match-bg py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="vintage-headline text-5xl md:text-6xl mb-4">CLASSIC TENNIS TRADITION</h2>
          <div className="vintage-divider max-w-lg mx-auto"></div>
        </div>

        <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8 mb-12 shadow-lg">
          <h3 className="vintage-subheading text-3xl mb-4 text-center">🎾 Next-Level Coaching with Pro-Grade AI Video Analysis</h3>
          <p className="vintage-body text-xl leading-relaxed mb-6 text-center">
            One of the few programs in the region using the same AI-powered video analysis trusted by top pros.
          </p>
        </div>

        {/* USTA Safe Play Certification Badge */}
        <div className="text-center mb-12">
          <span className="inline-block bg-green-800 text-yellow-200 px-4 py-2 rounded-md text-xl font-semibold shadow-md">
            ✅ USTA Safe Play Certified
          </span>
        </div>

        <div className="text-center mb-8">
          <h3 className="vintage-headline text-4xl md:text-5xl mb-3">LESSON OPTIONS &amp; PRICING</h3>
          <div className="vintage-divider max-w-md mx-auto"></div>
        </div>

        {/* Pricing cards only */}
        <div className="grid grid-cols-1 gap-8">
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-6 md:p-8">
            <div className="rounded-lg border border-green-300/40 bg-white shadow-sm p-6 mb-6">
              <div className="inline-flex items-center gap-2 rounded-md bg-green-900 text-yellow-200 px-4 py-2 mb-4">
                <span className="h-2 w-2 rounded-sm bg-yellow-300"></span>
                <span className="vintage-subheading text-3xl">1-on-1 Private Lesson</span>
              </div>
              <p className="vintage-body text-xl mb-2">$25 per hour</p>
              <p className="vintage-body">Personalized coaching, perfect for beginners or focused skill work</p>
            </div>

            <div className="rounded-lg border border-green-300/40 bg-white shadow-sm p-6 mb-6">
              <div className="inline-flex items-center gap-2 rounded-md bg-green-900 text-yellow-200 px-4 py-2 mb-4">
                <span className="h-2 w-2 rounded-sm bg-yellow-300"></span>
                <span className="vintage-subheading text-3xl">Semi-Private (2–3 Players)</span>
              </div>
              <ul className="vintage-body space-y-1 text-xl">
                <li>2 Players: $18 per person ($36/hour total)</li>
                <li>3 Players: $15 per person ($45/hour total)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-green-300/40 bg-white shadow-sm p-6">
              <div className="inline-flex items-center gap-2 rounded-md bg-green-900 text-yellow-200 px-4 py-2 mb-4">
                <span className="h-2 w-2 rounded-sm bg-yellow-300"></span>
                <span className="vintage-subheading text-3xl">Small Group (4–6 Players)</span>
              </div>
              <ul className="vintage-body space-y-1 text-xl">
                <li>4 Players: $12 per person ($48/hour total)</li>
                <li>5 Players: $10 per person ($50/hour total)</li>
                <li>6 Players: $9 per person ($54/hour total)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vintage-card p-6 bg-white/90 rounded-lg mt-8">
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10 text-center text-green-800">
              <span className="text-6xl mb-4 block">🎾</span>
              <p className="vintage-subheading text-xl font-bold">Tennis Excellence</p>
              <p className="vintage-body text-sm">Since the Golden Era</p>
            </div>
          </div>
          <p className="text-center text-green-900 mt-4 vintage-body font-medium italic">"Where champions are made in the shadow of the Wichitas"</p>
        </div>
      </div>
    </section>
  );
};

export default About;
