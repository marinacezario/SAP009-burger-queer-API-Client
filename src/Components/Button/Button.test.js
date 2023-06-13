import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  test("renders without crashing", () => {
    render(
      <Button id="submit-button" type="submit" text="login" value="login" />
    );
    const button = screen.getByRole("button");

    //  
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(button).toHaveAttribute('type',	'submit');
    expect(button).toHaveAttribute('value', 'login');

  });
});
