import React from "react";
import { Link } from "react-router-dom";

import "../styles/Hero.css";
import profileImg from "../assets/profile.jpg"; // adjust path if needed

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="welcome">Welcome</span>
      </div>

      <div className="hero-center">
        <div className="image-container">
          <div className="image-bg"></div>
          <img src={profileImg} alt="Farai Vambe" className="profile-img" />
        </div>
      </div>

      <div className="hero-right">
        <h1>
          I am <span className="name">Farai Vambe</span>
        </h1>
        <h2>A Software Developer</h2>
        <p>
          Passionate software developer with expertise in full-stack
          development, problem-solving, and clean code. Dedicated to building
          efficient, scalable solutions that deliver exceptional user
          experiences.
        </p>

        <div className="hero-buttons">
          <a
            href="/cv.pdf"
            download="Farai_Vambe_CV.pdf"
            className="btn primary"
          >
            Download CV
          </a>

          <Link to="/about" className="btn secondary">
            More info…
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
