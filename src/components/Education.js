import React from "react";
import "../styles/Education.css";

function Education() {
  const educationList = [
    {
      degree: "Software Engineering",
      school: "ALX Africa",
      status: "Completed",
      year: "2023 – 2024",
    },
    {
      degree: "BSc Computer Science",
      school: "University of the People",
      status: "In Progress",
      year: "2025 – Present",
    },
  ];

  return (
    <section className="education-section" id="education">
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p>
            <strong>{edu.school}</strong>
          </p>
          <p>
            {edu.year} — <em>{edu.status}</em>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Education;
