import React from 'react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-900 mb-16" style={{ fontFamily: 'Bebas Neue, cursive' }}>
          PRICING TIERS
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Private Lessons Pricing */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-orange-300">
            <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                PRIVATE LESSONS
              </h3>
              <span className="text-4xl font-bold text-white">$85</span>
              <p className="text-orange-100">per hour</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">One-on-one instruction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">Personalized training plan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">Flexible scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">Equipment included</span>
                </div>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-orange-700 text-center font-medium">
                  Package Deals Available
                </p>
              </div>

              <button className="retro-button-secondary w-full py-2">
                Book Private
              </button>
            </div>
          </div>

          {/* Small Group Pricing */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-yellow-400 transform scale-105">
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-orange-800 px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 mt-2" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                SMALL GROUP
              </h3>
              <span className="text-4xl font-bold text-white">$45</span>
              <p className="text-orange-100">per person/hour</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span className="text-orange-800">2-5 players maximum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span className="text-orange-800">Social learning environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span className="text-orange-800">Group activities & games</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-600 font-bold">✓</span>
                  <span className="text-orange-800">Equipment included</span>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-orange-700 text-center font-medium">
                  Bring Your Own Group or Join One
                </p>
              </div>

              <button className="retro-button-primary w-full py-2">
                Book Group
              </button>
            </div>
          </div>

          {/* Package Deals */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-orange-300">
            <div className="bg-gradient-to-r from-orange-700 to-yellow-700 p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, cursive' }}>
                PACKAGE DEALS
              </h3>
              <span className="text-2xl font-bold text-white">Save 15%</span>
              <p className="text-orange-100">on 5+ lessons</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">5-lesson packages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">10-lesson packages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">Family discounts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-orange-600 font-bold">✓</span>
                  <span className="text-orange-800">Student rates available</span>
                </div>
              </div>
              
              <div className="bg-orange-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-orange-700 text-center font-medium">
                  Best Value for Committed Players
                </p>
              </div>

              <button className="retro-button-secondary w-full py-2">
                View Packages
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-orange-700 mb-6 text-lg" style={{ fontFamily: 'Oswald, sans-serif' }}>
            All lessons include court time, equipment, and professional instruction
          </p>
          <button className="retro-button-primary text-xl px-12 py-4 transform hover:scale-105 transition-all duration-300">
            📞 CALL FOR CUSTOM PACKAGES
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;