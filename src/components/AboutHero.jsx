import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutHero.css";

function AboutHero() {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2>Get to Know Me:</h2>
        <p>
          I’m a passionate software developer based in South Africa, dedicated to building
          clean, efficient, and user-friendly web applications. With a strong foundation in
          front-end technologies and a growing expertise in full-stack development, I enjoy
          solving complex problems and creating meaningful digital experiences.
        </p>

        <div className="personal-info">
          <h3>Full Name: Farai Vambe</h3>
          <p>Age: 25 Years</p>
          <p>Language: English, Shona</p>
          <p>Phone No: +27 86737863</p>
          <p>Email: vambef7@gmail.com</p>
          <p>Address: 60 Die Ou Pad Rd, Harveston AH, Roodepoort, 1724</p>
        </div>
      </div>

      <div className="about-skills">
        <div className="skill-item">
          <span className="skill-name">REACT</span>
          <div className="skill-progress" style={{ width: "75%" }}></div>
          <span className="skill-percent">75%</span>
        </div>

        <div className="skill-item">
          <span className="skill-name">JAVASCRIPT</span>
          <div className="skill-progress" style={{ width: "60%" }}></div>
          <span className="skill-percent">60%</span>
        </div>

        <div className="skill-item">
          <span className="skill-name">CSS</span>
          <div className="skill-progress" style={{ width: "85%" }}></div>
          <span className="skill-percent">85%</span>
        </div>

        <div className="skill-item">
          <span className="skill-name">HTML</span>
          <div className="skill-progress" style={{ width: "90%" }}></div>
          <span className="skill-percent">90%</span>
        </div>

        <Link to="/skills" className="view-more-btn">
          View More
        </Link>
      </div>
    </div>
  );
}

export default AboutHero;
