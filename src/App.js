import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
