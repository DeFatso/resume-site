import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navigator from "../Navigator";

describe("Navigator", () => {
  const toggleDarkMode = jest.fn();

  test("renders nav title", () => {
    render(<Navigator darkMode={false} toggleDarkMode={toggleDarkMode} />);
    expect(screen.getByText("My Resume")).toBeInTheDocument();
  });

  test("renders all nav links", () => {
    render(<Navigator darkMode={false} toggleDarkMode={toggleDarkMode} />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
  });

  test("toggles dark mode", () => {
    render(<Navigator darkMode={false} toggleDarkMode={toggleDarkMode} />);
    fireEvent.click(screen.getByRole("button", { name: /dark mode/i }));
    expect(toggleDarkMode).toHaveBeenCalled();
  });

  test("opens and closes mobile menu", () => {
    render(<Navigator darkMode={false} toggleDarkMode={toggleDarkMode} />);
    const menuToggle = screen.getByText("☰");
    fireEvent.click(menuToggle);
    expect(screen.getByText("About")).toBeVisible();
  });
});
