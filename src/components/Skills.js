import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaTools } from "react-icons/fa";

const skills = [
    { name: "HTML", icon: <FaHtml5 color="#e44d26" />, level: 90 },
    { name: "CSS", icon: <FaCss3Alt color="#264de4"/>, level: 80 },
    { name: "JavaScript", icon: <FaJs color="#f0db4f"/>, level: 70 },
    { name: "React", icon: <FaReact color="#61dbfb"/>, level: 80 },
    { name: "Unit Testing (Jest)", icon: <FaTools />, level: 65 },
];

function Skills() {
    return (
        <section style={{ marginBottom: "1.5rem" }}  >
            <h2>Skills</h2>

            {skills.map((skill, index) => (
                <div key={index} style={{ marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "0.3rem" }}>
                        <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>{skill.icon}</span>
                        <span style={{ fontWeight: "bold" }}>{skill.name}: {skill.level}%</span>
                    </div>

                    <div style={{ 
                        height: "10px", 
                        background: "#e0e0e0", 
                        borderRadius: "5px", 
                        overflow: "hidden",
                        }}>
                        <div style={{
                            height: "100%",
                            background: "#61dbfb",
                            width: `${skill.level}%`,
                            transition: "width 0.5s ease-in-out"
                        }}></div>
                    </div>
                </div>
            ))

            }
        </section>
    );
}

export default Skills;