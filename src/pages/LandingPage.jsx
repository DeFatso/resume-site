import React from "react";
import Navigator from "../components/Navigator";
import Hero from "../components/Hero";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="nav">
        <Navigator />
      </div>
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default LandingPage;
