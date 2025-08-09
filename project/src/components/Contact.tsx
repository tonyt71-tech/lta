import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-panel text-yellow-100">
      <div className="page-wrap py-12 md:py-16">
        <h2 className="hd-2 mb-4 text-yellow-200">Contact &amp; Schedule</h2>
        <p className="body text-yellow-100/90">
          Email: coach@example.com • Phone: (580) 555-TENNIS
        </p>

        {/* Calendar stays; interactive map removed per request */}
        <div id="schedule" className="mt-6">
          <div className="rounded-2xl overflow-hidden border border-yellow-500/30">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=e7389edd6836d48e1d2d371d0879a5d8ad0a51142915fb127b5fccf157eec288%40group.calendar.google.com&ctz=America%2FChicago"
              style={{ border: 0, width: "100%", height: "600px" }}
              frameBorder={0}
              scrolling="no"
              title="Schedule"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
