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
        I'm a passionate Front-End Developer based in South Africa with a strong focus on creating clean, responsive, and engaging user interfaces using modern technologies like React. My journey into web development started with a curiosity for how websites work, and it has grown into a deep commitment to building smooth, accessible, and visually appealing web experiences.
        <br /><br />
        I thrive on turning ideas into functional products and enjoy every step of the development process—from designing intuitive interfaces to writing efficient, maintainable code. I'm constantly exploring new tools and frameworks, staying up-to-date with industry best practices to ensure the solutions I build are both innovative and scalable.
        <br /><br />
        Collaboration is at the heart of my work ethic. I believe that great digital products come from strong teamwork, open communication, and a user-first mindset. Whether working with designers, backend developers, or clients, I aim to contribute positively to every project I’m part of.
        <br /><br />
        When I’m not coding, I’m often studying the latest trends in UI/UX, improving my skills through side projects, or helping others learn the basics of web development. My goal is to grow into a well-rounded developer capable of delivering end-to-end solutions that not only function flawlessly but also delight users.
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