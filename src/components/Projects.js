import React from "react";

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
        description: "Description of Project 3",
        link: "https://github.com/DeFatso/AirBnB_clone",
    },
];

function Projects() {
    return (
        <section style={{ marginBottom: "3rem" }}>
            <h2>Projects</h2>

            {projects.map((project, index) => (
                <div key={index} style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ marginBottom: "0.3rem" }}>{project.title}</h3>
                    <p style={{margin: "0"}}>{project.description}</p>

                    {project.link && (
                        <p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </p>
                    )

                    }
                </div>
            ))}
        </section>
    );
}

export default Projects;
