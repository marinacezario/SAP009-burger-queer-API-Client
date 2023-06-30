import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { handleShowMenu } from "../../api/products";
jest.mock('./Menu.module.css', () => require('./__mocks__/Menu.module.css.stub.js'));
import { Menu } from "./Menu";
import "@testing-library/jest-dom";
import styles from './Menu.module.css';

describe("Menu component", () => {
  beforeEach(() => {
    handleShowMenu.mockClear();
  });

  jest.mock("../../api/products");
  
    it("should call handleShowMenu and set products when a button is clicked", async () => {
      handleShowMenu.mockResolvedValueOnce({ data: [{ id: 1, type: "breakfast", name: "Eggs", price: 5 }] });
      const handleSelectedProducts = jest.fn();
  
      render(<Menu handleSelectedProducts={handleSelectedProducts} />);
  
      const breakfastButton = screen.getByTestId("breakfast-button");
  
      fireEvent.click(breakfastButton);
  
      expect(handleShowMenu).toHaveBeenCalledTimes(1);
      expect(handleShowMenu).toHaveBeenCalledWith();
  
      // Wait for handleShowMenu promise to resolve
      await screen.findByText("Eggs");
  
      expect(handleSelectedProducts).toHaveBeenCalledTimes(0);
  
      const productButton = screen.getByText("Eggs");
      fireEvent.click(productButton);
  
      expect(handleSelectedProducts).toHaveBeenCalledTimes(1);
      expect(handleSelectedProducts).toHaveBeenCalledWith({ id: 1, type: "breakfast", name: "Eggs", price: 5 });
    });

  it("should filter products based on the active button", async () => {
    handleShowMenu.mockResolvedValueOnce({
      data: [
        { id: 1, type: "breakfast", name: "Eggs", price: 5 },
        { id: 2, type: "diner", name: "Burger", price: 10 },
        { id: 3, type: "breakfast", name: "Toast", price: 3 },
      ],
    });
    const handleSelectedProducts = jest.fn();

    render(<Menu handleSelectedProducts={handleSelectedProducts} />);

    const breakfastButton = screen.getByTestId("breakfast-button");
    const dinerButton = screen.getByTestId("diner-button");

    fireEvent.click(breakfastButton);

    await screen.findByText("Eggs");
    expect(screen.queryByText("Burger")).toBeNull();

    fireEvent.click(dinerButton);

    await screen.findByText("Burger");
    expect(screen.queryByText("Eggs")).toBeNull();
  });
});
