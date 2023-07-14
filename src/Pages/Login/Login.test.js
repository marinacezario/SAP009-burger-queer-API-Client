import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

// Header mocked
jest.mock("../../Components/Header/Header", () => ({
  Header: jest.fn(() => <div>Mocked Header</div>),
}));

// Form mocked
jest.mock("../../Components/Form/Form", () => ({
  Form: jest.fn(() => <div>Mocked Form</div>),
}));

describe("Login", () => {
  it("should render Login page", () => {
    render(<Login />);

    expect(screen.queryByText("Mocked Header")).not.toBeNull();
    expect(screen.queryByText("Mocked Form")).not.toBeNull();
  });
});
