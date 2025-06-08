import React from "react";
import profilePic from "../assets/profile.jpg";  // adjust path if needed
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={profilePic} alt="Farai Vambe" className="profile-pic" />
      <h1>Farai Vambe</h1>
      <p>Front-End Developer</p>
      <p className="tagline">“Crafting modern web experiences with React”</p>
    </header>
  );
}

export default Header;
