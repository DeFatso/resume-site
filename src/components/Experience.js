import React from "react";

function Experience() {
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

  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h3 style={{ margin: 0 }}>{job.role}</h3>
          <p style={{ fontWeight: "bold", margin: "0.2rem 0" }}>{job.company}</p>
          <p style={{ margin: 0, fontStyle: "italic" }}>{job.period}</p>
          <ul style={{ marginTop: "0.5rem", paddingLeft: "1.2rem" }}>
            {job.description.map((item, idx) => (
              <li key={idx} style={{ lineHeight: "1.6" }}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;