import React from "react";
import {
  fireEvent,
  render,
  screen,

} from "@testing-library/react";

import "@testing-library/jest-dom";


describe("Form", () => {
  const mockOnChange = jest.fn();
  test("should render correctly", () => {
    render(<form onSubmit={mockOnChange} data-testid="form"></form>);

    const formElement = screen.getByTestId("form");/* eslint-disable react/react-in-jsx-scope */
    expect(formElement).toBeInTheDocument();
  });

  test("should call handleSubmit function onSubmit", () => {
    render(<form onSubmit={mockOnChange} data-testid="form"></form>);
    
    const formElement = screen.getByTestId("form");
    fireEvent.submit(formElement);
    expect(mockOnChange).toHaveBeenCalled();

    // expect(handleSubmit).toHaveBeenCalledWith({
    //   email: 'test@example.com',
    //   password: 'password123'
    // });
  });
});
