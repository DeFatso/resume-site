import React from "react";

function About() {
    return (
        <div>
            <h2>About Me</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
                I'm a passionate Front-End Developer based in South Africa with a focus on creating clean, responsive, and engaging user experiences using React. I love turning ideas into web products and continuously learning to improve my craft.
            </p>

            <ul style={{ listStyle: 'none', paddingLeft: 0, color: '#333' }}>
                <li><strong>🌍 Location:</strong> South Africa</li>
                <li><strong>💼 Available for:</strong> Freelance & full-time work</li>
                <li><strong>⚛️ Main Stack:</strong> React, JavaScript, HTML, CSS</li>
                <li><strong>📧 Email:</strong> vambef7@yahoo.com</li>
            </ul>
        </div>
    );
}

export default About;