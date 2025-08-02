import React from 'react';

const Lessons: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-20 bg-gradient-to-b from-green-900 to-green-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-yellow-400 drop-shadow">
          Schedule a Lesson
        </h2>
        <p className="mb-8 text-lg">
          Use the calendar below to view availability and book your session.
        </p>

        <div className="w-full max-w-4xl mx-auto aspect-[4/3] mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=e7389edd6836d48e1d2d371d0879a5d8ad0a51142915fb127b5fccf157eec288%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            title="Lesson Booking Calendar"
          ></iframe>
        </div>

        <div className="bg-white text-green-900 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>PTR Certified – Adult Development</li>
            <li>USTA Safe Play Certified</li>
            <li>First Aid & CPR Certified</li>
            {/* Add more if needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
