import React from "react";
import { Link } from "react-router-dom";
import "../styles/AboutHero.css";

function AboutHero() {
  return (
    <div className="about-container">
      <div className="text-section">
        <h2>Dummy Text (Lorem Ipsum Style):</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam..."
        </p>

        <div className="personal-info">
          <h3>Full Name: Farai Vambe</h3>
          <p>Age: 25 Years</p>
          <p>Language: English, Shona</p>
          <p>Phone No: +00 9876543210</p>
          <p>Email: mail.example@gmail.com</p>
          <p>Address: Ruami Mello Moraes, Salvador, MA, 40352, Brazil</p>
        </div>
      </div>

      <div className="about-skills">
        <div className="skill-item">
          <span className="skill-name">REACT</span>
          <div className="skill-progress" style={{ width: "30%" }}></div>
          <span className="skill-percent">30%</span>
        </div>

        <div className="skill-item">
          <span className="skill-name">JAVASCRIPT</span>
          <div className="skill-progress" style={{ width: "80%" }}></div>
          <span className="skill-percent">80%</span>
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
