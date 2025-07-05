import React, { useState, useEffect } from "react";
import Navigator from "../components/Navigator";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Bootstrap", level: 70 },
  { name: "Chakra UI", level: 65 },
  { name: "ESLint", level: 60 },
  { name: "Prettier", level: 60 },
  { name: "Figma", level: 75 },
  { name: "Chrome DevTools", level: 85 },
  { name: "Jest", level: 65 },
];

export default function Skills() {
  const [animatedWidths, setAnimatedWidths] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedWidths(skills.map(skill => skill.level));
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
    </div>
  );
}