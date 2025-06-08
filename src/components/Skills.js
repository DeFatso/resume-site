import React, { useState, useEffect } from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: 80, icon: <FaJsSquare color="#f0db4f" /> },
  { name: "React", level: 75, icon: <FaReact color="#61dbfb" /> },
];

export default function Skills() {
  const [animatedWidths, setAnimatedWidths] = useState(
    skills.map(() => 0) // initial width 0 for all skills
  );

  useEffect(() => {
    // Animate widths after mount with a tiny delay
    const timeout = setTimeout(() => {
      setAnimatedWidths(skills.map((skill) => skill.level));
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(({ name, icon }, i) => (
          <div key={name} className="skill">
            <div className="skill-icon">{icon}</div>
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
  );
}
