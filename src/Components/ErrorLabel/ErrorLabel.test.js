import React from "react";
import { render } from "@testing-library/react";
import { ErrorLabel } from "./ErrorLabel";
import "@testing-library/jest-dom/extend-expect";

describe("ErrorLabel", () => {
  it(" should renders the error label with the correct value", () => {
    const value = "Error message";
    const { getByText } = render(<ErrorLabel value={value} />);
    const errorLabel = getByText(value);
    expect(errorLabel).toBeInTheDocument();
  });
});
