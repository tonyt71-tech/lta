import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-yellow-200 py-16 paper-texture">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Academy Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-green-800 font-bold text-xl">🎾</span>
              </div>
              <h3 className="vintage-subheading text-2xl text-yellow-300">
                Lawton Tennis Academy
              </h3>
            </div>
            <p className="vintage-body text-yellow-100 leading-relaxed text-lg">
              Where classic tennis tradition meets the natural beauty of Southwest Oklahoma. 
              Serving our community since the golden age of tennis.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="vintage-subheading text-xl text-yellow-300 mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li><a href="#home" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors text-lg">Home</a></li>
              <li><a href="#about" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors text-lg">About</a></li>
              <li><a href="#contact" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors text-lg">Contact</a></li>
              <li><a href="#" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors text-lg">Schedule</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="text-center md:text-right">
            <h4 className="vintage-subheading text-xl text-yellow-300 mb-6">
              CONTACT
            </h4>
            <div className="space-y-3 vintage-body text-yellow-200 text-lg">
              <p>(580) 555-TENNIS</p>
              <p>info@lawtontennisacademy.com</p>
              <p>123 Tennis Court Drive<br />Lawton, OK 73505</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
            <p className="vintage-body text-yellow-300 text-lg mb-4 md:mb-0">
              © 2024 Lawton Tennis Academy. All rights reserved.
            </p>
            <p className="vintage-body text-yellow-200 text-lg">
              Bringing classic tennis tradition to Southwest Oklahoma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;