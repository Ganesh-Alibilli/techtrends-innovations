import React from "react";

const Hero = () => {
  return (
    <section style={{
      padding: "4rem 1rem",
      backgroundColor: "#f0f0f0",
      textAlign: "center"
    }}>
      <h2>Empowering Your Digital Future</h2>
      <p>At TechTrend Innovations, we specialize in building IT solutions that are scalable for growth, fortified with advanced security measures, and driven by intelligent, modern technologies to meet evolving business needs.</p>
      <button style={{
        padding: "1rem 2rem",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Get Started</button>
    </section>
  );
};

export default Hero;
