import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import { Header } from "./Header";
import "@testing-library/jest-dom/extend-expect";

describe("Header component", () => {
  it("renders the header with the logo", () => {
    render(
      <Router>
        {" "}
        {/* Wrap the Header component with the Router */}
        <Header />
      </Router>
    );
    const logoElement = screen.queryAllByAltText("Burguer Queer Logo");
    expect(logoElement.length).toBe(2); //Checks if there are two elements with alt attribute 'Burger Queer Logo'
  });
});
