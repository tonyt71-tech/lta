import React from 'react';

const Lessons = () => {
  return (
    <section id="lessons" className="py-20 bg-gradient-to-br from-orange-100 to-yellow-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-900 mb-16" style={{ fontFamily: 'Bebas Neue, cursive' }}>
          LESSON OPTIONS
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Private Lessons */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">🎾</span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                  PRIVATE LESSONS
                </h3>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-orange-800 mb-6 leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                One-on-one instruction tailored specifically to your skill level and goals. Get personalized attention and accelerated improvement with our expert coaches.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-orange-600">★</span>
                  <span className="text-orange-800">100% personalized attention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-600">★</span>
                  <span className="text-orange-800">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-600">★</span>
                  <span className="text-orange-800">Customized training plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-600">★</span>
                  <span className="text-orange-800">Fastest skill development</span>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-6">
                <p className="text-orange-800 font-medium text-center">
                  Perfect for beginners to advanced players
                </p>
              </div>

              <button className="retro-button-secondary w-full py-3">
                Learn More
              </button>
            </div>
          </div>

          {/* Small Group Lessons */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6">
              <div className="flex items-center space-x-3">
                <span className="text-4xl">👥</span>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                  SMALL GROUP LESSONS
                </h3>
              </div>
            </div>
            
            <div className="p-8">
              <p className="text-orange-800 mb-6 leading-relaxed" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Learn with friends, family, or new tennis partners in our small group settings. Maximum 5 players per session for quality instruction and social fun.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-600">★</span>
                  <span className="text-orange-800">2-5 players maximum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-600">★</span>
                  <span className="text-orange-800">Social learning environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-600">★</span>
                  <span className="text-orange-800">Cost-effective option</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-600">★</span>
                  <span className="text-orange-800">Practice match play</span>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-orange-800 font-medium text-center">
                  Great for friends and families
                </p>
              </div>

              <button className="retro-button-secondary w-full py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="retro-button-primary text-xl px-10 py-4 transform hover:scale-105 transition-all duration-300">
            📅 SCHEDULE YOUR LESSON
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lessons;