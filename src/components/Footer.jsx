import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{
      padding: "1rem 2rem",
      backgroundColor: "#111",
      color: "#fff",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ fontSize: "0.9rem" }}>
        &copy; {new Date().getFullYear()} TechTrend Innovations. All rights reserved.
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

const iconStyle = {
  color: "#fff",
  fontSize: "1.2rem",
  textDecoration: "none",
  transition: "transform 0.2s",
  display: "inline-block"
};

export default Footer;
