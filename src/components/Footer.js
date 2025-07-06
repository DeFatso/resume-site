// FooterWithModal.js
import { useState } from "react";
import "../styles/Footer.css";

const privacyContent = [
  {
    title: "Data Collection",
    text: "This portfolio website does not automatically collect any personal data.",
  },
  {
    title: "Contact Information",
    text: "If you contact me via email, your information will only be used to respond to your inquiry.",
  },
  {
    title: "Cookies",
    text: "This site does not use tracking cookies or analytics tools.",
  },
];

export default function FooterWithModal({ darkMode = false }) {
  const [showModal, setShowModal] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={`site-footer ${darkMode ? "dark" : ""}`}>
        <div className="footer-content">
          <div className="footer-section">
            <p>© {currentYear} Farai Vambe</p>
            <button
              className="privacy-btn"
              onClick={() => setShowModal(true)}
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {showModal && (
        <div className={`privacy-modal ${darkMode ? "dark" : ""}`}>
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
              aria-label="Close privacy policy"
            >
              &times;
            </button>
            <h2>Privacy Policy</h2>
            <p className="last-updated">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            {privacyContent.map((section, index) => (
              <div key={index} className="policy-section">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            ))}

            <div className="policy-section">
              <h3>Contact</h3>
              <p>For any questions: vambef7@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
