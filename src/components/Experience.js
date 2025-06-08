import React from "react";
import "../styles/Experience.css";

const jobs = [
  {
    role: "Junior Front-End Developer",
    company: "Intusol Tech",
    period: "2024 – Present",
    description: [
      "Developed responsive front-end interfaces using React and modern web technologies.",
      "Collaborated with design and backend teams to build smooth user experiences.",
      "Contributed to UI/UX enhancements and participated in code reviews.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Farscope",
    period: "2023 – 2024",
    description: [
      "Led initial project setup, including GitHub repositories and version control workflow.",
      "Provided ongoing technical support for fellow interns (hardware & software setup).",
      "Worked on front-end features and UI design using HTML, CSS, and JavaScript.",
      "Assisted in UX/UI design tasks and iterative user feedback integration.",
      "Implemented unit tests using Jest to ensure application stability and catch regressions early.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-timeline">
        {jobs.map((job, index) => (
          <div key={index} className="experience-card fade-in">
            <div className="experience-header">
              <h3>{job.role}</h3>
              <span className="company">{job.company}</span>
              <span className="period">{job.period}</span>
            </div>
            <ul className="description">
              {job.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}