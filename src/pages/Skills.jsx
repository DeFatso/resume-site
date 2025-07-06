import React, { useState } from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import "../styles/Skills.css";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 60 },
      { name: "Bootstrap", level: 60 },
      { name: "Chakra UI", level: 35 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "ESLint", level: 90 },
      { name: "Prettier", level: 100 },
      { name: "Figma", level: 85 },
      { name: "Chrome DevTools", level: 85 },
      { name: "Jest", level: 65 },
    ],
  },
  {
    category: "Backend / Server-side",
    skills: [
      { name: "Python", level: 70 },
      { name: "Flask", level: 45 },
      { name: "Shell", level: 90 },
      { name: "MySQL", level: 48 },
      { name: "C", level: 65 },
    ],
  },
];

export default function Skills() {
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (category) => {
    setOpenGroups((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="skills-page">
      <Navigator />
      <section className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-groups">
          {skillGroups.map((group) => (
            <div key={group.category} className="skill-group">
              <button
                className="group-toggle"
                onClick={() => toggleGroup(group.category)}
              >
                {group.category} {openGroups[group.category] ? "▲" : "▼"}
              </button>

              {openGroups[group.category] && (
                <div className="skills-list">
                  {group.skills.map(({ name, level }) => (
                    <div key={name} className="skill">
                      <span className="skill-name">{name}</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
