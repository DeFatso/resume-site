import React from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer"
import "../styles/NotFound.css";
function NotFound() {
  return (
    <section className="NotFound">
      <Navigator />
      <div className="hero404">
        <h1>Page not found Go away</h1>
      </div>
      <Footer />
    </section>
  );
}

export default NotFound;
