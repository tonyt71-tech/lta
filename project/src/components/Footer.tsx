import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="relative text-yellow-300 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900">
      {/* Overlayed PNG with blur */}
      <div className="absolute inset-0 flex justify-center items-center opacity-20">
        <img
          src="/lta_bg_nobg.png"
          alt="LTA Background"
          className="w-full h-full object-contain blur-sm"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-3">
            <img src="/logo.png" alt="LTA" className="h-6 mr-2" />
            <h2 className="text-xl font-bold">Lawton Tennis Academy</h2>
          </div>
          <p>Classic instruction. Modern tools.</p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p>Questions? (580) 483-3342 •</p>
          <p>lawtontennisacademy@gmail.com</p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Hours</h3>
          <p>Mon–Sat: By appointment</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      <div className="relative z-10 text-center mt-6">
        <Link
          to="/book"
          className="inline-block bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Schedule Your Lesson
        </Link>
        <p className="mt-4 text-sm">© 2025 Lawton Tennis Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
