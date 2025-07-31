import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BackgroundSection from './components/BackgroundSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-800 to-green-600">
      <Header />
      <BackgroundSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;