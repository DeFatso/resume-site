import React, { useEffect, useState } from "react";
import "../styles/About.css";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className={`about-section ${fadeIn ? "fade-in" : ""}`}>
      <h2>About Me</h2>
      <p className="about-description">
        I'm a passionate Front-End Developer based in South Africa with a focus on creating clean, responsive, and engaging user experiences using React. I love turning ideas into web products and continuously learning to improve my craft.
      </p>

      <ul className="about-list">
        <li><span className="icon">🌍</span> <strong>Location:</strong> South Africa</li>
        <li><span className="icon">💼</span> <strong>Available for:</strong> Freelance & full-time work</li>
        <li><span className="icon">⚛️</span> <strong>Main Stack:</strong> React, JavaScript, HTML, CSS</li>
        <li><span className="icon">📧</span> <strong>Email:</strong> vambef7@yahoo.com</li>
      </ul>
    </section>
  );
}

export default About;