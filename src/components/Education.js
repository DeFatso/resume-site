import React from "react";

function Education() {
  const educationList = [
    {
      degree: "Software Engineering",
      school: "ALX Africa",
      status: "In Completed",
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
    <section style={{ marginBottom: '3rem' }}>
      <h2>Education</h2>
      {educationList.map((edu, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0 }}>{edu.degree}</h3>
          <p style={{ margin: '0.2rem 0', fontWeight: 'bold' }}>{edu.school}</p>
          <p style={{ margin: 0 }}>{edu.year} — <em>{edu.status}</em></p>
        </div>
      ))}
    </section>
  );
}

export default Education;