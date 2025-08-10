import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigator.css";

function Navigator() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="nav-bar">
      <a href="/" className="nav-title">Resume</a>

      <div className={`nav-center ${menuActive ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuActive(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuActive(false)}>
          About
        </Link>
        <Link to="/skills" onClick={() => setMenuActive(false)}>
          Skills
        </Link>
        <Link to="/experience" onClick={() => setMenuActive(false)}>
          Experience
        </Link>
        <Link to="/contact" onClick={() => setMenuActive(false)}>
          Contact
        </Link>
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
