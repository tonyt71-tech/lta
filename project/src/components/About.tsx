import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="vintage-headline text-5xl md:text-6xl text-green-800 mb-6">
              CLASSIC TENNIS TRADITION
            </h2>
            <div className="vintage-divider max-w-lg mx-auto mb-8"></div>
            <p className="vintage-subheading text-2xl text-green-700 max-w-3xl mx-auto">
              Where the timeless elegance of tennis meets Southwest Oklahoma charm
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Lesson Options & Pricing */}
            <div className="space-y-8">
              <h3 className="vintage-subheading text-4xl text-green-800 mb-6">
                LESSON OPTIONS & PRICING
              </h3>
              
              <div className="vintage-card rounded-lg p-8 transition-all duration-300 space-y-6">
                {/* 1-on-1 Private Lesson */}
                <div>
                  <p className="vintage-subheading text-2xl text-green-800">■ 1-on-1 Private Lesson</p>
                  <p className="vintage-body text-green-700">$25 per hour</p>
                  <p className="vintage-body text-green-700">
                    ■ Personalized coaching, perfect for beginners or focused skill work
                  </p>
                </div>

                {/* Semi-Private */}
                <div>
                  <p className="vintage-subheading text-2xl text-green-800">■ Semi-Private (2–3 Players)</p>
                  <p className="vintage-body text-green-700">2 Players: $18 per person ($36/hour total)</p>
                  <p className="vintage-body text-green-700">3 Players: $15 per person ($45/hour total)</p>
                  <p className="vintage-body text-green-700">
                    ■ Balanced value and individual attention, ideal for friends or siblings
                  </p>
                </div>

                {/* Small Group */}
                <div>
                  <p className="vintage-subheading text-2xl text-green-800">■ Small Group (4–6 Players)</p>
                  <p className="vintage-body text-green-700">4 Players: $12 per person ($48/hour total)</p>
                  <p className="vintage-body text-green-700">5 Players: $10 per person ($50/hour total)</p>
                  <p className="vintage-body text-green-700">6 Players: $9 per person ($54/hour total)</p>
                  <p className="vintage-body text-green-700">
                    ■ Fun, energetic, game-based drills
                  </p>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-8">
              <div className="vintage-card rounded-lg p-8">
                <p className="vintage-body text-lg text-green-800 leading-relaxed mb-6">
                  Welcome to Lawton Tennis Academy, where classic tennis instruction 
                  meets the natural beauty of Southwest Oklahoma. With the majestic 
                  Wichita Mountains as our backdrop, we provide world-class tennis 
                  lessons in an inspiring, peaceful setting.
                </p>
                
                <p className="vintage-body text-lg text-green-800 leading-relaxed mb-6">
                  Our academy combines time-tested fundamentals with modern training 
                  techniques. Whether you're picking up a racquet for the first time 
                  or looking to refine your competitive edge, we'll help you develop 
                  your game with style and precision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold text-lg">✓</span>
                    </div>
                    <span className="vintage-body text-green-800 font-medium text-lg">
                      Certified Professional Instructors
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold text-lg">✓</span>
                    </div>
                    <span className="vintage-body text-green-800 font-medium text-lg">
                      All Skill Levels Welcome
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold text-lg">✓</span>
                    </div>
                    <span className="vintage-body text-green-800 font-medium text-lg">
                      Flexible Scheduling Options
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-green-800 font-bold text-lg">✓</span>
                    </div>
                    <span className="vintage-body text-green-800 font-medium text-lg">
                      Scenic Mountain Views
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Vintage Photo Frame */}
              <div className="relative float-animation">
                <div className="vintage-card p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 h-80 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Tennis Court Illustration */}
                    <svg width="300" height="200" viewBox="0 0 300 200" className="absolute inset-0">
                      {/* Court Background */}
                      <rect x="50" y="50" width="200" height="100" fill="#4a7c23" stroke="#2d5016" strokeWidth="3" />
                      
                      {/* Center Line */}
                      <line x1="150" y1="50" x2="150" y2="150" stroke="#f5f5dc" strokeWidth="2" />
                      
                      {/* Service Boxes */}
                      <line x1="50" y1="100" x2="250" y2="100" stroke="#f5f5dc" strokeWidth="2" />
                      <line x1="100" y1="50" x2="100" y2="150" stroke="#f5f5dc" strokeWidth="2" />
                      <line x1="200" y1="50" x2="200" y2="150" stroke="#f5f5dc" strokeWidth="2" />
                      
                      {/* Net */}
                      <rect x="145" y="50" width="10" height="100" fill="#f5f5dc" opacity="0.8" />
                      
                      {/* Mountains in background */}
                      <path d="M0 80 Q50 60 100 70 Q150 50 200 65 Q250 45 300 60 L300 0 L0 0 Z" 
                            fill="#2d5016" opacity="0.3" />
                    </svg>
                    
                    <div className="relative z-10 text-center text-green-800">
                      <span className="text-6xl mb-4 block">🎾</span>
                      <p className="vintage-subheading text-xl font-bold">Tennis Excellence</p>
                      <p className="vintage-body text-sm">Since the Golden Era</p>
                    </div>
                  </div>
                  <p className="text-center text-green-700 mt-4 vintage-body font-medium italic">
                    "Where champions are made in the shadow of the Wichitas"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
