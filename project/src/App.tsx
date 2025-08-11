import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        {/* Ensure Pricing is included and in the right spot */}
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
