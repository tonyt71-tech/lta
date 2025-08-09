import React from 'react';

const BackgroundSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-end justify-center"
      style={{
        backgroundImage: 'url(/webbkgrndnotext.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Content positioned at bottom of image */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
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

          {/* Large Schedule Button */}
          <div className="mb-8">
            <button className="vintage-badge text-3xl md:text-4xl px-12 py-6 inline-block">
              SCHEDULE A LESSON
            </button>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <p className="vintage-body text-xl text-yellow-200 mb-4">
              Call us today to start your tennis journey
            </p>
            <p className="vintage-subheading text-2xl text-yellow-300">
              (580) 483-3342
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;