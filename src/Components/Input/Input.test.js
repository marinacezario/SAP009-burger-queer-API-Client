import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import "@testing-library/jest-dom";

describe("Input component", () => {
  const mockOnChange = jest.fn();
  test("renders without crashing", () => {
    render(<Input type="email" placeholder="Email" onChange={mockOnChange} />);

    const email_input = screen.getByPlaceholderText("Email");

    expect(email_input).toBeInTheDocument();
    expect(email_input).toMatchSnapshot();
    expect(email_input).toHaveAttribute("type", "email");
 
  });
  test("calls onChange", () => {
    render(<Input type="email" placeholder="Email" onChange={mockOnChange} />);

    const email_input = screen.getByPlaceholderText("Email");

    const newValue = "example@example.com";

    fireEvent.change(email_input, { target: { value: newValue } });

    expect(mockOnChange).toHaveBeenCalled();
  });
});
