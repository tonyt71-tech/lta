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
      <div className="relative z-10 w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="vintage-headline text-4xl md:text-6xl text-yellow-300 mb-8 leading-tight">
            LAWTON<br /><span className="text-yellow-400">TENNIS</span><br /><span className="text-yellow-200">ACADEMY</span>
          </h1>
          <div className="vintage-divider my-8 max-w-md mx-auto"></div>
          <p className="vintage-subheading text-2xl md:text-3xl text-yellow-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Classic Tennis Instruction in the Heart of Southwest Oklahoma
          </p>

          <div className="mb-8">
            <button className="vintage-badge text-3xl md:text-4xl px-12 py-6 inline-block">SCHEDULE A LESSON</button>
          </div>

          <div className="text-center">
            <p className="vintage-body text-xl text-yellow-200 mb-4">Call us today to start your tennis journey</p>
            <p className="vintage-subheading text-2xl text-yellow-300">(580) 483-3342</p>
          </div>

          {/* Testimonials box */}
          <div className="max-w-5xl mx-auto px-4 mt-10">
            <div className="testimonial-card">
              <h3 className="vintage-subheading text-3xl mb-4">Testimonials</h3>
              <ul className="vintage-body space-y-2 text-lg">
                <li>“Coach was patient and clear. My serve improved in two weeks.” — A.M.</li>
                <li>“Great with kids. The group lessons are affordable and fun.” — J.R.</li>
                <li>“The mountain views and coaching style make practice a highlight.” — S.K.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
