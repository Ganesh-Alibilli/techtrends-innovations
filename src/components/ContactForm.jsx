import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name) {
      setStatus("Please enter your name.");
      return;
    }

    if (!form.email) {
      setStatus("Please enter your email.");
      return;
    }

    if (!form.message) {
      setStatus("Please enter your message.");
      return;
    }

    setStatus("Sending...");
    setIsDisabled(true)

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbya33xnyPzPFEYV5gb8rtqMobU5uXYDErT1jCU26jZsQGUYZhglCqZaqOGHFhrMJzet/exec",
        {
          method: "POST",
          mode: "no-cors", // important for Google Apps Script
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      // Since response is opaque, assume success if fetch didn't throw
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setIsDisabled(false)
    } catch (err) {
      console.error("Error:", err);
      setStatus("Error occurred. Try again later.");
    }
  };

  return (
    <section id="contact" style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Contact Us</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows="5"
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <button disabled={isDisabled} type="submit" style={{
          padding: "0.75rem",
          borderRadius: "5px",
          border: "none",
          backgroundColor: isDisabled ? "#cccfd3" : "#007bff",
          color: "#fff",
          fontSize: "1rem",
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}>
          Send Message
        </button>
        {status && (
          <p
            style={{
              color: status.includes("successfully") ? "green" : "red",
              fontWeight: "500",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

const inputStyle = {
  padding: "0.75rem",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default ContactForm;
