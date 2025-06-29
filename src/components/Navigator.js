import React from "react";
import "../styles/Navigator.css";

function Navigator({ darkMode, toggleDarkMode }) {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <h1 className="nav-title">My Resume</h1>
      </div>

      <div className="nav-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="nav-right">
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navigator;
