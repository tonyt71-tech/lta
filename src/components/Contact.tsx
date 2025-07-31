import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-green-700 to-green-800 paper-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="vintage-headline text-5xl md:text-6xl text-yellow-300 mb-6">
            GET IN TOUCH
          </h2>
          <div className="vintage-divider max-w-lg mx-auto mb-8"></div>
          <p className="vintage-subheading text-2xl text-yellow-100">
            Ready to start your tennis journey?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="vintage-card rounded-lg p-8">
            <h3 className="vintage-subheading text-3xl text-green-800 mb-8 text-center">
              CONTACT INFORMATION
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-800" size={24} />
                </div>
                <div>
                  <h4 className="vintage-subheading text-xl text-green-800 mb-2">Phone</h4>
                  <p className="vintage-body text-lg text-green-700">(580) 555-TENNIS</p>
                  <p className="vintage-body text-lg text-green-700">(580) 555-8366</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-green-800" size={24} />
                </div>
                <div>
                  <h4 className="vintage-subheading text-xl text-green-800 mb-2">Email</h4>
                  <p className="vintage-body text-lg text-green-700">info@lawtontennisacademy.com</p>
                  <p className="vintage-body text-lg text-green-700">lessons@lawtontennisacademy.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-green-800" size={24} />
                </div>
                <div>
                  <h4 className="vintage-subheading text-xl text-green-800 mb-2">Location</h4>
                  <p className="vintage-body text-lg text-green-700">123 Tennis Court Drive</p>
                  <p className="vintage-body text-lg text-green-700">Lawton, OK 73505</p>
                  <p className="vintage-body text-green-600 mt-1">Near the Wichita Mountains</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-green-800" size={24} />
                </div>
                <div>
                  <h4 className="vintage-subheading text-xl text-green-800 mb-2">Hours</h4>
                  <p className="vintage-body text-lg text-green-700">Monday - Friday: 6:00 AM - 9:00 PM</p>
                  <p className="vintage-body text-lg text-green-700">Saturday: 7:00 AM - 8:00 PM</p>
                  <p className="vintage-body text-lg text-green-700">Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="vintage-card rounded-lg p-8">
            <h3 className="vintage-subheading text-3xl text-green-800 mb-8 text-center">
              SCHEDULE A LESSON
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block vintage-body text-green-700 font-medium mb-3 text-lg">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-3 border-green-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors vintage-body text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block vintage-body text-green-700 font-medium mb-3 text-lg">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-3 border-green-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors vintage-body text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block vintage-body text-green-700 font-medium mb-3 text-lg">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border-3 border-green-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors vintage-body text-lg"
                  placeholder="(580) 555-0123"
                />
              </div>

              <div>
                <label className="block vintage-body text-green-700 font-medium mb-3 text-lg">Lesson Type</label>
                <select className="w-full px-4 py-3 border-3 border-green-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors vintage-body text-lg">
                  <option>Private Lessons</option>
                  <option>Small Group Lessons</option>
                  <option>Package Deals</option>
                </select>
              </div>

              <div>
                <label className="block vintage-body text-green-700 font-medium mb-3 text-lg">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border-3 border-green-300 rounded-lg focus:border-yellow-400 focus:outline-none transition-colors resize-none vintage-body text-lg"
                  placeholder="Tell us about your tennis experience and goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="retro-button-primary w-full py-4 text-xl transform hover:scale-105 transition-all duration-300"
              >
                🎾 SEND MESSAGE
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Map Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="vintage-card rounded-lg p-8">
            <h3 className="vintage-subheading text-3xl text-green-800 mb-6 text-center">
              FIND US
            </h3>
            <div className="bg-green-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-green-800">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="vintage-body text-lg">Interactive Map Coming Soon</p>
                <p className="vintage-body text-green-600">123 Tennis Court Drive, Lawton, OK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;