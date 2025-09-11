import React from 'react';

export default function Contact() {
  return (
    <main>
      <section className="section-solid">
        <div className="page-wrap py-14 md:py-20 text-center">
          <h1 className="hd-1">Contact &amp; Schedule</h1>
          <div className="divider mx-auto max-w-xl mt-6" />
          <p className="subhead opacity-90 mt-8">Get in touch or book your lesson directly.</p>
        </div>
      </section>

      <section className="section-panel">
        <div className="page-wrap py-12 md:py-16">
          {/* Full green box with centered text */}
          <div
            className="card rounded-lg p-10 flex justify-center items-center"
            style={{ backgroundColor: 'var(--wim-green)' }}
          >
            <span className="font-semibold text-yellow-200 text-xl text-center">
              ✅ USTA Safe Play Certified
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
