import React from 'react';

export default function About() {
  return (
    <section id="about" className="section-panel">
      <div className="page-wrap py-20 text-center">
        <h2 className="hd-1 mb-4">CLASSIC TENNIS TRADITION</h2>
        <div className="divider mx-auto max-w-lg mb-10" />

        <div className="card card-surface p-8 mb-12">
          <h3 className="hd-2 mb-4">🎾 Next-Level Coaching with Pro-Grade AI Video Analysis</h3>
          <p className="subhead opacity-90">
            One of the few programs in the region using the same AI-powered video analysis trusted by top pros.
          </p>
        </div>

        <div className="mt-2">
          <span className="inline-block bg-[var(--wim-green)] text-yellow-200 px-5 py-2 rounded-md font-semibold shadow-md">
            ✅ USTA Safe Play Certified
          </span>
        </div>
      </div>
    </section>
  );
}
