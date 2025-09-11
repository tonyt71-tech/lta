import React from 'react';

export default function Footer() {
  return (
    <footer className="full-bleed header-match-bg text-yellow-200 py-16">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Academy Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span style={{color:'var(--wim-green)'}} className="font-bold text-xl">🎾</span>
              </div>
              <h3 className="vintage-subheading text-2xl text-yellow-300">
                Lawton Tennis Academy
              </h3>
            </div>
            <p className="vintage-body opacity-90">
              Classic instruction. Modern tools.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="vintage-subheading text-xl mb-2 text-yellow-300">Contact</h4>
            <p className="vintage-body opacity-90">
              Call or text: <span className="font-semibold">(580) 483-3342</span>
            </p>
            <p className="vintage-body opacity-90">Lawton, Oklahoma</p>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="vintage-subheading text-xl mb-2 text-yellow-300">Hours</h4>
            <p className="vintage-body opacity-90">Mon–Sat: By appointment</p>
            <p className="vintage-body opacity-90">Sun: Closed</p>
          </div>
        </div>

        <div className="mt-10 h-[6px] rounded-full" style={{backgroundImage:'linear-gradient(90deg, var(--brand-panel), var(--brand-panel-2))'}} />

        <p className="text-center mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Lawton Tennis Academy
        </p>
      </div>
    </footer>
  );
}
