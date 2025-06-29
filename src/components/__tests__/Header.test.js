import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("renders profile picture with correct alt text", () => {
    render(<Header />);
    const image = screen.getByAltText("Farai Vambe");
    expect(image).toBeInTheDocument();
  });

  test("renders the name Farai Vambe", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: /Farai Vambe/i })).toBeInTheDocument();
  });

  test("renders subtitle and tagline", () => {
    render(<Header />);
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
    expect(screen.getByText(/Crafting modern web experiences/i)).toBeInTheDocument();
  });
});