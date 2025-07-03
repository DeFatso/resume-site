import React, { useState } from "react";
import "../styles/Navigator.css";

function Navigator() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-title">Resume</div>
      
      <div className={`nav-center ${menuActive ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuActive(false)}>Home</a>
        <a href="about" onClick={() => setMenuActive(false)}>About</a>
        <a href="#skills" onClick={() => setMenuActive(false)}>Skills</a>
        <a href="#experience" onClick={() => setMenuActive(false)}>Experience</a>
        <a href="#contact" onClick={() => setMenuActive(false)}>Contact</a>
      </div>
      
      <button 
        className="menu-toggle" 
        onClick={() => setMenuActive(!menuActive)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>
  );
}

export default Navigator;
