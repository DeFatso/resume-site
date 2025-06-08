import React, { useState } from "react";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Skills from "./components/Skills";
import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="app-header">
        <h1>My Resume</h1>
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
