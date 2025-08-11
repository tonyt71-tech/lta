import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative retro-bg min-h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Main Content */}
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

        <div className="mb-16">
          <button className="btn-primary text-3xl md:text-4xl px-12 py-6 inline-block">
            SCHEDULE A LESSON
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Private Lessons */}
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="vintage-subheading text-3xl mb-4">
                PRIVATE LESSONS
              </h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              One-on-one instruction tailored to your skill level. Perfect for beginners 
              learning fundamentals or advanced players refining technique.
            </p>
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl">$25</span>
              <span className="vintage-body ml-2">per hour</span>
            </div>
            <button className="retro-button-secondary w-full py-3 text-xl">
              BOOK PRIVATE
            </button>
          </div>

          {/* Small Group Lessons */}
          <div className="vintage-card bg-white/90 text-green-900 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="vintage-subheading text-3xl mb-4">
                SMALL GROUP LESSONS
              </h3>
            </div>
            <p className="vintage-body text-lg mb-6 leading-relaxed">
              Learn with friends in our small group sessions. 3-5 students maximum 
              ensures personal attention while building camaraderie.
            </p>
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl">$9–$15</span>
              <span className="vintage-body ml-2">per person/hour</span>
            </div>
            <button className="retro-button-secondary w-full py-3 text-xl">
              BOOK GROUP
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="vintage-body text-xl mb-4">
            Call us today to start your tennis journey
          </p>
          <p className="vintage-subheading text-2xl">
            (580) 483-3342
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
