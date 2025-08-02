
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

        <div className="w-full aspect-[16/9] mb-12 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=e7389edd6836d48e1d2d371d0879a5d8ad0a51142915fb127b5fccf157eec288%40group.calendar.google.com&ctz=America%2FChicago"
            style={{ border: 0 }}
            className="w-full h-full"
            frameBorder="0"
            scrolling="no"
            title="Schedule Calendar"
          ></iframe>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold mb-4 text-green-900">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>PTR Certified – Adult Development</li>
            <li>USTA Safe Play Certified</li>
            <li>First Aid & CPR Certified</li>
          </ul>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-green-900">
            🎾 Tennis Lesson Pricing Structure
          </h3>
          <ul className="list-disc list-inside text-left space-y-2">
            <li><strong>1-on-1 Private Lesson:</strong> $25 per hour</li>
            <li><strong>Semi-Private (2 players):</strong> $18 per person ($36/hour total)</li>
            <li><strong>Semi-Private (3 players):</strong> $15 per person ($45/hour total)</li>
            <li><strong>Small Group (4 players):</strong> $12 per person ($48/hour total)</li>
            <li><strong>Small Group (5 players):</strong> $10 per person ($50/hour total)</li>
            <li><strong>Small Group (6 players):</strong> $9 per person ($54/hour total)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
