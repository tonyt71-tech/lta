import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/webbkgrndnotext.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-32">
        {/* Main Headline */}
        <h1 className="vintage-headline text-4xl md:text-6xl text-yellow-300 mb-8 leading-tight">
          LAWTON
          <br />
          <span className="text-yellow-400">TENNIS</span>
          <br />
          <span className="text-yellow-200">ACADEMY</span>
        </h1>
        
        {/* Vintage Divider */}
        <div className="vintage-divider my-8 max-w-md mx-auto"></div>
        
        {/* Subheading */}
        <p className="vintage-subheading text-2xl md:text-3xl text-yellow-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Classic Tennis Instruction in the Heart of Southwest Oklahoma
        </p>

        {/* Large Schedule Button - Above the fold */}
        <div className="mb-16">
          <button className="vintage-badge text-3xl md:text-4xl px-12 py-6 inline-block">
            SCHEDULE A LESSON
          </button>
        </div>

        {/* Service Highlights */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Private Lessons */}
          <div className="vintage-card rounded-lg p-8 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🎾</div>
              <h3 className="vintage-subheading text-3xl text-green-800 mb-4">
                PRIVATE LESSONS
              </h3>
            </div>
            
            <p className="vintage-body text-lg text-green-700 mb-6 leading-relaxed">
              One-on-one instruction tailored to your skill level. Perfect for beginners 
              learning fundamentals or advanced players refining technique.
            </p>
            
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl text-green-800">$85</span>
              <span className="vintage-body text-green-600 ml-2">per hour</span>
            </div>

            <button className="retro-button-secondary w-full py-3 text-xl">
              BOOK PRIVATE
            </button>
          </div>

          {/* Small Group Lessons */}
          <div className="vintage-card rounded-lg p-8 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="vintage-subheading text-3xl text-green-800 mb-4">
                SMALL GROUP LESSONS
              </h3>
            </div>
            
            <p className="vintage-body text-lg text-green-700 mb-6 leading-relaxed">
              Learn with friends in our small group sessions. 3-5 students maximum 
              ensures personal attention while building camaraderie.
            </p>
            
            <div className="text-center mb-6">
              <span className="vintage-subheading text-2xl text-green-800">$45</span>
              <span className="vintage-body text-green-600 ml-2">per person/hour</span>
            </div>

            <button className="retro-button-secondary w-full py-3 text-xl">
              BOOK GROUP
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="vintage-body text-xl text-yellow-200 mb-4">
            Call us today to start your tennis journey
          </p>
          <p className="vintage-subheading text-2xl text-yellow-300">
            (580) 555-TENNIS
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