import React from "react";
import "../styles/Projects.css";

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

function Projects() {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
