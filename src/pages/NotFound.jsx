import React from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <Navigator />
      <div className="hero404">
        <div className="error-container">
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Page Not Found</h2>
          <p className="error-description">
            Oops! The page you're looking for has vanished into the digital
            void.
          </p>
          <div className="cta-buttons">
            <a href="/" className="home-btn">
              Return Home
            </a>
            <a href="/contact" className="contact-btn">
              Report Issue
            </a>
          </div>
        </div>
        <div className="astronaut-animation">👨‍🚀</div>{" "}
        {/* Emoji or replace with SVG */}
      </div>
      <Footer />
    </section>
  );
}

export default NotFound;
