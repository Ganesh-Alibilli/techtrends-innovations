import React from "react";

const Header = () => {
  return (
    <header style={{
      padding: "1rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#111",
      color: "#fff",
      flexWrap: "wrap"
    }}>
      <h1>TechTrend Innovations</h1>
      <nav>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  margin: "0 1rem"
};

export default Header;
