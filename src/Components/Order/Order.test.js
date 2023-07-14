import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import { Order } from "./Order";
import "@testing-library/jest-dom";

// Button mock
jest.mock("../Button/Button", () => ({
  Button: ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

describe("Order", () => {
  test("renders without crashing", () => {
    const clientName = "John Doe";
    const date = "2023-07-08";
    const products = ["Product 1", "Product 2"];
    const titleBtn = "Submit";
    const status = "pending";
    const borderColor = "blue";
    const showButton = true;
    const onStatusChange = jest.fn();

    const { getByText, getByTestId } = render(
      <Order
        clientName={clientName}
        date={date}
        products={products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
        titleBtn={titleBtn}
        status={status}
        borderColor={borderColor}
        showButton={showButton}
        onStatusChange={onStatusChange}
      />
    );

    // Checks if the clients info exist
    expect(getByText(`Client: ${clientName}`)).toBeInTheDocument();
    expect(getByText(`Entry: ${date}`)).toBeInTheDocument();

    // Checks if the products list exist
    const productsList = getByTestId("products-list");
    expect(productsList).toBeInTheDocument();
    expect(productsList.children.length).toBe(products.length);

    // Checks if the button exists and contains the right text
    const submitButton = queryByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent(titleBtn);

    // Simulates button click
    fireEvent.click(submitButton);

    // Checks if the onStatusChange function was called correctly
    expect(onStatusChange).toHaveBeenCalledTimes(1);
    expect(onStatusChange).toHaveBeenCalledWith(status);
  });

  test("renders the correct border", () => {
    const clientName = "John Doe";
    const date = "2023-07-08";
    const products = ["Product 1", "Product 2"];
    const titleBtn = "Submit";
    const status = "pending";
    const borderColor = "pink";
    const onStatusChange = jest.fn();

    const { container } = render(
      <Order
        clientName={clientName}
        date={date}
        products={products}
        titleBtn={titleBtn}
        status={status}
        borderColor={borderColor}
        onStatusChange={onStatusChange}
      />
    );

    // Checks if the correct CSS class has been applied to the container
    expect(container.firstChild).toHaveClass("pink_border");
  });
});
