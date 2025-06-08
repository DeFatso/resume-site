import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <p className="about-description">
        I'm a passionate Front-End Developer based in South Africa with a focus on creating clean, responsive, and engaging user experiences using React. I love turning ideas into web products and continuously learning to improve my craft.
      </p>

      <ul className="about-list">
        <li><strong>🌍 Location:</strong> South Africa</li>
        <li><strong>💼 Available for:</strong> Freelance & full-time work</li>
        <li><strong>⚛️ Main Stack:</strong> React, JavaScript, HTML, CSS</li>
        <li><strong>📧 Email:</strong> vambef7@yahoo.com</li>
      </ul>
    </section>
  );
}

export default About;
