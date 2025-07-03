import React, { useEffect, useState } from "react";
import Navigator from "../components/Navigator";
import "../styles/About.css";

function About() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="about">
        <div><Navigator /></div>
        <div className="about-content">
            <h1>About</h1>
        </div>
    </div>
  );
}

export default About;