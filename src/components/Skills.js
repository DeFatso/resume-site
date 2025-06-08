import React from "react";
import "../styles/Skills.css";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "Unit Testing (Jest)", level: 75 },
  { name: "Git & GitHub", level: 80 },
  { name: "UX/UI Design", level: 70 },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(({ name, level }) => (
          <div key={name} className="skill">
            <div className="skill-name">{name}</div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ "--width": `${level}%` }}
                aria-valuenow={level}
                aria-valuemin="0"
                aria-valuemax="100"
              />

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
