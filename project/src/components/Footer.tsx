import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="relative text-yellow-300 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 overflow-hidden"
    >
      {/* Full-coverage blurred background */}
      <div className="absolute inset-0">
        <img
          src="/lta_bg_nobg.png"
          alt="LTA Background"
          className="w-full h-full object-cover blur-sm opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left */}
        <div>
          <div className="flex items-center justify-center md:justify-start mb-3">
            <img src="/logo.png" alt="LTA" className="h-12 mr-3" />
            <h2 className="text-2xl font-bold">Lawton Tennis Academy</h2>
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
        <a
          href="/book"
          className="inline-block bg-yellow-400 text-green-900 font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition"
        >
          Schedule Your Lesson
        </a>
        <p className="mt-4 text-sm">© 2025 Lawton Tennis Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
