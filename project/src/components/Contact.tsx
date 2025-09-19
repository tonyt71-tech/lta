import React from "react";

export default function Contact() {
  return (
    <main>
      {/* Section with blurred calendar background */}
      <section className="relative section-solid">
        {/* Blurred calendar background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-md"
          style={{ backgroundImage: "url('/calendar-bg.png')" }}
        />
        {/* Overlay tint for readability */}
        <div className="absolute inset-0 bg-purple-900/80" />

        {/* Foreground content */}
        <div className="relative page-wrap py-14 md:py-20 text-center">
          <h1 className="hd-1">Contact &amp; Schedule</h1>
          <div className="divider mx-auto max-w-xl mt-6" />
          <p className="subhead opacity-90 mt-8 text-[2rem] md:text-[2.5rem] leading-tight">
            Get in touch or book your lesson directly.
          </p>
        </div>
      </section>

      {/* Certification box */}
      <section className="section-panel">
        <div className="page-wrap py-12 md:py-16">
          <div
            className="card rounded-lg p-10 flex justify-center items-center"
            style={{ backgroundColor: "var(--wim-green)" }}
          >
            <span className="font-semibold text-yellow-200 text-[3.5rem] md:text-[5rem] text-center leading-tight">
              ✅ USTA Safe Play Certified
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
