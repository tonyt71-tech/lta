import React from 'react';

const Lessons: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-900 to-green-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="vintage-headline text-5xl md:text-6xl text-yellow-300 mb-6">
            SCHEDULE A LESSON
          </h2>
          <div className="vintage-divider max-w-lg mx-auto mb-8"></div>
          <p className="vintage-subheading text-2xl text-yellow-100">
            Use the calendar below to check availability and book your session.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto aspect-[4/3] mb-16 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=e7389edd6836d48e1d2d371d0879a5d8ad0a51142915fb127b5fccf157eec288%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            title="Tennis Lesson Booking Calendar"
          ></iframe>
        </div>

        <div className="bg-white text-green-900 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-center">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-left text-xl space-y-4">
            <li>PTR Certified – Adult Development</li>
            <li>USTA Safe Play Certified</li>
            <li>First Aid & CPR Certified</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
