import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { ShirtsSection } from "./components/ShirtsSection";
import { OrderGuide } from "./components/OrderGuide";
import { VloggersSection } from "./components/VloggersSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white antialiased">
      <Navbar />
      <Hero />
      <AboutSection />
      <ShirtsSection />
      <OrderGuide />
      <VloggersSection />
      <Footer />
    </div>
  );
}
