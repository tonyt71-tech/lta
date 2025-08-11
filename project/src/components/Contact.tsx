import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="full-bleed header-match-bg text-yellow-100 py-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="vintage-headline text-5xl md:text-6xl mb-6 text-yellow-200">
            Contact &amp; Schedule
          </h2>
          <div className="vintage-divider max-w-lg mx-auto mb-8"></div>
          <p className="vintage-subheading text-2xl max-w-3xl mx-auto">
            Get in touch or book your lesson directly below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/90 text-green-900 rounded-lg p-8 mb-16 shadow-lg">
          <p className="vintage-body text-lg leading-relaxed">
            <strong>Email:</strong> coach@example.com
          </p>
          <p className="vintage-body text-lg leading-relaxed">
            <strong>Phone:</strong> (580) 555-TENNIS
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-white/90 text-green-900 rounded-lg overflow-hidden border border-yellow-500/30 shadow-xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=e7389edd6836d48e1d2d371d0879a5d8ad0a51142915fb127b5fccf157eec288%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            className="w-full h-[600px]"
            frameBorder={0}
            scrolling="no"
            title="Schedule"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
