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
        <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8 mb-12 shadow-lg">
          <h3 className="vintage-subheading text-3xl mb-4 text-center">
            🎾 Next-Level Coaching with Pro-Grade AI Video Analysis
          </h3>
          <p className="vintage-body text-lg leading-relaxed mb-6 text-center">
            One of the few programs in the region using the same AI-powered video analysis trusted by top pros.
            Lessons get smarter and more personalized with instant on-court feedback.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="list-disc list-inside space-y-2 vintage-body">
              <li><strong>Instant stroke analysis</strong> for forehands, backhands, serves, and volleys.</li>
              <li><strong>Pro-level stats</strong> like speed, spin, shot placement, and rally length.</li>
              <li><strong>Automatic video highlights</strong> to review right after your session.</li>
              <li><strong>Ultra-accurate line calling</strong> to sharpen shot selection.</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 vintage-body">
              <li><strong>Up to 40% faster improvement</strong> than traditional video review.</li>
              <li>Technology used in <strong>millions of sessions worldwide</strong>.</li>
              <li>Approved for use in official events for tracking and line calls.</li>
            </ul>
          </div>
        </div>

        {/* Pricing Title */}
        <div className="text-center mb-8">
          <h3 className="vintage-headline text-4xl md:text-5xl mb-3">
            LESSON OPTIONS &amp; PRICING
          </h3>
          <div className="vintage-divider max-w-md mx-auto"></div>
        </div>

        {/* Top Two Boxes (equal height) */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Pricing */}
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <p className="vintage-subheading text-2xl">■ 1-on-1 Private Lesson</p>
              <p className="vintage-body">$25 per hour</p>
              <p className="vintage-body">■ Personalized coaching, perfect for beginners or focused skill work</p>
            </div>

            <div className="mt-6">
              <p className="vintage-subheading text-2xl">■ Semi-Private (2–3 Players)</p>
              <p className="vintage-body">2 Players: $18 per person ($36/hour total)</p>
              <p className="vintage-body">3 Players: $15 per person ($45/hour total)</p>
              <p className="vintage-body">■ Balanced value and individual attention, ideal for friends or siblings</p>
            </div>

            <div className="mt-6">
              <p className="vintage-subheading text-2xl">■ Small Group (4–6 Players)</p>
              <p className="vintage-body">4 Players: $12 per person ($48/hour total)</p>
              <p className="vintage-body">5 Players: $10 per person ($50/hour total)</p>
              <p className="vintage-body">6 Players: $9 per person ($54/hour total)</p>
              <p className="vintage-body">■ Fun, energetic, game-based drills</p>
            </div>
          </div>

          {/* Right: About bullets */}
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <p className="vintage-body text-lg leading-relaxed mb-6">
                Welcome to Lawton Tennis Academy, where classic instruction meets the natural beauty
                of Southwest Oklahoma. With the Wichita Mountains as our backdrop, we deliver world-class
                lessons in an inspiring, peaceful setting.
              </p>
              <p className="vintage-body text-lg leading-relaxed mb-6">
                We combine time-tested fundamentals with modern training so you build real, durable skill.
              </p>
              <div className="space-y-4">
                {[
                  'Certified Professional Instructors',
                  'All Skill Levels Welcome',
                  'Flexible Scheduling Options',
                  'Scenic Mountain Views'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold text-lg">✓</span>
                    </div>
                    <span className="vintage-body font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wide Box aligned to edges of the two above */}
        <div className="vintage-card p-6 bg-white/90 rounded-lg mt-8">
          <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
            <svg width="300" height="200" viewBox="0 0 300 200" className="absolute inset-0">
              <rect x="50" y="50" width="200" height="100" fill="#4a7c23" stroke="#2d5016" strokeWidth="3" />
              <line x1="150" y1="50" x2="150" y2="150" stroke="#f5f5dc" strokeWidth="2" />
              <line x1="50" y1="100" x2="250" y2="100" stroke="#f5f5dc" strokeWidth="2" />
              <line x1="100" y1="50" x2="100" y2="150" stroke="#f5f5dc" strokeWidth="2" />
              <line x1="200" y1="50" x2="200" y2="150" stroke="#f5f5dc" strokeWidth="2" />
              <rect x="145" y="50" width="10" height="100" fill="#f5f5dc" opacity="0.8" />
              <path d="M0 80 Q50 60 100 70 Q150 50 200 65 Q250 45 300 60 L300 0 L0 0 Z" fill="#2d5016" opacity="0.3" />
            </svg>
            <div className="relative z-10 text-center text-green-800">
              <span className="text-6xl mb-4 block">🎾</span>
              <p className="vintage-subheading text-xl font-bold">Tennis Excellence</p>
              <p className="vintage-body text-sm">Since the Golden Era</p>
            </div>
          </div>
          <p className="text-center text-green-900 mt-4 vintage-body font-medium italic">
            "Where champions are made in the shadow of the Wichitas"
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
