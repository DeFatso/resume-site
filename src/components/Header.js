import React from "react";
import profilePic from "../assets/profile.jpg"; // ✅ restore the import
import "../styles/Header.css";

function Header() {
  return (
    <header className="site-header">
      <div className="header-content">
        <img src={profilePic} alt="Farai Vambe" className="profile-pic" />
        <div className="header-title">
          <h1>Farai Vambe</h1>
          <p className="subtitle">Front-End Developer</p>
          <p className="tagline">“Crafting modern web experiences with React”</p>
        </div>
      </div>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
