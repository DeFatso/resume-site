import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
