import React from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
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

const projects = [
  {
    title: "Portfolio Website",
    description: "This portfolio website built with React",
    link: "https://github.com/DeFatso/resume-site",
  },
  {
    title: "Printf",
    description: "A simple printf implementation in C",
    link: "https://github.com/DeFatso/alx-pritf_f",
  },
  {
    title: "Simple Shell",
    description: "A version of the Unix shell",
    link: "https://github.com/DeFatso/simple-shell",
  },
  {
    title: "AirBnB Clone",
    description: "A clone of the AirBnB website",
    link: "https://github.com/DeFatso/AirBnB_clone",
  },
  {
    title: "Saeku Blockchain Services",
    description: "A blockchain services provider",
    link: "https://github.com/farscorp/saeku-web-frontend",
  },
];

export default function Experience() {
  return (
    <section className="experience-section">
      <Navigator />
      <h2 className="experience-title">My Experience</h2>
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

      <h2 className="experience-title" style={{ marginTop: "3rem" }}>
        Projects
      </h2>
      <div className="experience-timeline">
        {projects.map((project, index) => (
          <div key={index} className="experience-card fade-in">
            <div className="experience-header">
              <h3>{project.title}</h3>
            </div>
            <p className="description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="company"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
