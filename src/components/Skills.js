import React, { useState, useEffect } from "react";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiChakraui,
  SiEslint,
  SiPrettier,
  SiFigma,
  SiJest,
} from "react-icons/si";

// ✅ Skills array outside the component (won't trigger unnecessary renders)
const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", level: 80, icon: <FaJsSquare color="#f0db4f" /> },
  { name: "React", level: 75, icon: <FaReact color="#61dbfb" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss color="#38bdf8" /> },
  { name: "Bootstrap", level: 70, icon: <FaBootstrap color="#7952b3" /> },
  { name: "Chakra UI", level: 65, icon: <SiChakraui color="#61c1b7" /> },
  { name: "ESLint", level: 60, icon: <SiEslint color="#4b32c3" /> },
  { name: "Prettier", level: 60, icon: <SiPrettier color="#f7b93e" /> },
  { name: "Figma", level: 75, icon: <SiFigma color="#a259ff" /> },
  { name: "Chrome DevTools", level: 85, icon: <FaChrome color="#4285f4" /> },
  { name: "Jest", level: 65, icon: <SiJest color="#99425b" /> },
];

export default function Skills() {
  const [animatedWidths, setAnimatedWidths] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    // Reset first, then animate to actual widths
    setAnimatedWidths(skills.map(() => 0));
    const timeout = setTimeout(() => {
      setAnimatedWidths(skills.map((skill) => skill.level));
    }, 100);

    return () => clearTimeout(timeout);
  }, []); // ✅ Empty array — no ESLint warning now

  return (
    <section id="skills" className="skills-section">
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