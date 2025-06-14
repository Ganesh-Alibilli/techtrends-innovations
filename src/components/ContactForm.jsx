import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    contactNumber: "",
  });
  const [status, setStatus] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.name.trim()) {
      return "Please enter your name.";
    }
    if (!form.email.trim()) {
      return "Please enter your email.";
    }
    if (!emailRegex.test(form.email)) {
      return "Please enter a valid email address.";
    }
    if (!form.contactNumber.trim()) {
      return "Please enter your contact number.";
    }
    if (!/^\d{10}$/.test(form.contactNumber)) {
      return "Contact number should be 10 digits.";
    }
    if (!form.message.trim()) {
      return "Please enter your message.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus(validationError);
      return;
    }

    setStatus("Sending...");
    setIsDisabled(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxWXgXfmYr4o1WpSKML9OIcktEm8YowCPnQO34ejiwhoAzqUfErZkdjzDYg5ZLCNMgg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", contactNumber: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setStatus("Error occurred. Try again later.");
    }

    setIsDisabled(false);
  };

  return (
    <section id="contact" style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Contact Us</h3>
      <p>
        We’re here to assist you with any queries or support you may need. Fill
        out the form, and our team will respond promptly. Your satisfaction is
        our priority!
      </p>
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
        <label style={labelStyle}>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            placeholder="Your Contact Number"
            style={inputStyle}
          />
        </label>

        <label style={labelStyle}>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </label>

        <button
          disabled={isDisabled}
          type="submit"
          style={{
            padding: "0.75rem",
            borderRadius: "5px",
            border: "none",
            backgroundColor: isDisabled ? "#cccfd3" : "#007bff",
            color: "#fff",
            fontSize: "1rem",
            cursor: isDisabled ? "not-allowed" : "pointer",
          }}
        >
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
  marginTop: "0.5rem",
};

const labelStyle = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
  fontWeight: "500",
  fontSize: "1rem",
};

export default ContactForm;
