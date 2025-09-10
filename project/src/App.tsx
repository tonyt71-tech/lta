import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
        <BackgroundSection />
      </main>
      <Footer />
    </div>
  );
}
