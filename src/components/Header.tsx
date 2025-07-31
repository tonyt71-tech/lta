import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-green-800 to-green-700 shadow-lg z-50 border-b-4 border-yellow-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-green-800 font-bold text-xl">🎾</span>
            </div>
            <h1 className="vintage-subheading text-yellow-300 text-2xl">
              Lawton Tennis Academy
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors font-medium text-lg">Home</a>
            <a href="#about" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors font-medium text-lg">About</a>
            <a href="#contact" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors font-medium text-lg">Contact</a>
          </nav>

          {/* Schedule Button */}
          <div className="hidden md:block">
            <button className="retro-button-primary px-6 py-2 text-lg">
              SCHEDULE
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-yellow-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-green-600">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors py-2 text-lg">Home</a>
              <a href="#about" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors py-2 text-lg">About</a>
              <a href="#contact" className="vintage-body text-yellow-200 hover:text-yellow-400 transition-colors py-2 text-lg">Contact</a>
              <button className="retro-button-primary px-6 py-2 text-lg mt-4">
                SCHEDULE
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;