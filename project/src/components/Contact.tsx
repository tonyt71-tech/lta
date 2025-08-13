import React from "react";

const BOOK_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3BArnBU5UvS5AGJjW9L5mEuC6mF4pJ2F0_ShR0A_d8Gav2uZHsV8B5SesHEjQ9Qhqu_mqGrPYf";

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
            Get in touch or book your lesson directly.
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/90 text-green-900 rounded-lg p-8 mb-12 shadow-lg">
          <p className="vintage-body text-lg leading-relaxed">
            <strong>Email:</strong> lawtontennisacademy@gmail.com
          </p>
          <p className="vintage-body text-lg leading-relaxed">
            <strong>Phone:</strong> (580) 483-3342
          </p>
        </div>

        {/* Booking Button (calendar iframe removed) */}
        <div className="bg-white/90 text-green-900 rounded-lg p-8 text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Book a Lesson</h3>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-2xl px-10 py-4 inline-block"
          >
            Open Booking Page
          </a>
        </div>
      </div>
    </section>
  );
}
