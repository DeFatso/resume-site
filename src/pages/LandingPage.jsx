import React from "react";
import Navigator from "../components/Navigator";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navigator />

      <main className="landing-main">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
