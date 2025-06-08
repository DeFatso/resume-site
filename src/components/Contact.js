import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

function Contact() {
  return (
    <section style={{ marginBottom: "3rem" }}>
      <h2>Contact</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li style={{ marginBottom: "0.5rem" }}>
          <FaEnvelope />{" "}
          <a href="mailto:youremail@example.com">youremail@example.com</a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <FaGithub />{" "}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            github.com/yourusername
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <FaLinkedin />{" "}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            linkedin.com/in/yourprofile
          </a>
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          <FaFilePdf />{" "}
          <a href="/your-cv.pdf" download>
            Download CV
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
