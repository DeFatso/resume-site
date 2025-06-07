import React from "react";

function Header() {
    return (
        <header style={{ textAlign: "center", marginBottom: "3rem"}}>
            <h1 style={{ fontSize: "2.5rem", margin: "0"}}>Farai Vambe</h1>
            <p style={{ fontSize: "1.2rem", color: "#555"}}>Front-End Developer</p>
            <p style={{ fontStyle: "italic", marginTop: "0.5rem"}}>“Crafting modern web experiences with React”</p>
        </header>
    );
}

export default Header;