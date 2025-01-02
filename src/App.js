import React from "react";
import HeroSection from "./components/HeroSection";
import BookingForm from "./components/BookingForm";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <HeroSection />
      <BookingForm />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default App;
