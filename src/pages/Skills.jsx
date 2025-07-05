import React, { useState, useEffect } from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 60 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 60 },
  { name: "Bootstrap", level: 60 },
  { name: "Chakra UI", level: 35 },
  { name: "ESLint", level: 90 },
  { name: "Prettier", level: 100 },
  { name: "Figma", level: 85 },
  { name: "Chrome DevTools", level: 85 },
  { name: "Jest", level: 65 },
];

export default function Skills() {
  const [animatedWidths, setAnimatedWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedWidths(skills.map((skill) => skill.level));
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="skills-page">
      <Navigator />
      <section className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          {skills.map(({ name }, i) => (
            <div key={name} className="skill">
              <span className="skill-name">{name}</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${animatedWidths[i]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
