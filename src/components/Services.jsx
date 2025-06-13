import React from "react";
import { FaCloud, FaLock, FaCode, FaChalkboardTeacher } from "react-icons/fa";

const Services = () => {
  const services = [
    { icon: <FaCloud />, title: "Cloud Services" },
    { icon: <FaLock />, title: "Cyber Security" },
    { icon: <FaCode />, title: "Web Development" },
    { icon: <FaChalkboardTeacher />, title: "Training" }
  ];

  return (
    <section id="services" style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Our Services</h3>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap",
        marginTop: "1rem"
      }}>
        {services.map((srv, index) => (
          <div
            key={index}
            style={{
              width: "250px",
              padding: "1.5rem",
              borderRadius: "10px",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0px)"}
          >
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{srv.icon}</div>
            <h4>{srv.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
