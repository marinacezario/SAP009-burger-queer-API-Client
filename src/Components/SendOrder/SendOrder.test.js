import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemorySource, createHistory, LocationProvider } from "@reach/router";
import { toast } from 'react-toastify';
import 'jest-localstorage-mock';

import { SendOrder } from "./SendOrder";
import { createNewOrder } from "../../api/orders";

jest.mock("../../api/orders");
jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("SendOrder", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("should display error toast when no client name is provided", () => {
    const renderSelectedProducts = jest.fn();
    const renderOrderTotal = jest.fn();
    const orderResume = [];
    const name = ""; // Fornecer um nome de cliente vazio
  
    const { queryByTestId, getByText } = render(
      <MemoryRouter>
        <SendOrder
          renderSelectedProducts={renderSelectedProducts}
          renderOrderTotal={renderOrderTotal}
          orderResume={orderResume}
        />
      </MemoryRouter>
    );
  
    fireEvent.change(queryByTestId("client-name-input"), {
      target: { value: name },
    });
    fireEvent.click(queryByTestId("submit-button"));
  
    expect(toast.error).toHaveBeenCalledWith(
      'Please, insert the name of the client'
    );
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(getByText("send order")).toBeInTheDocument();
  });

  test("should display error toast when no product is selected", () => {
    const renderSelectedProducts = jest.fn();
    const renderOrderTotal = jest.fn();
    const orderResume = [];
    const name = "John Doe";

    const { queryByTestId, getByText } = render(
      <MemoryRouter>
        <SendOrder
          renderSelectedProducts={renderSelectedProducts}
          renderOrderTotal={renderOrderTotal}
          orderResume={orderResume}
        />
      </MemoryRouter>
    );

    fireEvent.change(queryByTestId("client-name-input"), {
      target: { value: name },
    });
    fireEvent.click(queryByTestId("submit-button"));

    expect(toast.error).toHaveBeenCalledWith(
      'Please, choose at least 1 product'
    );
    expect(toast.error).toHaveBeenCalledTimes(1);
    expect(getByText("send order")).toBeInTheDocument();
  });

  test("should navigate to /current-orders and display success toast when order is sent successfully", async () => {
    const renderSelectedProducts = jest.fn();
    const renderOrderTotal = jest.fn();
    const orderResume = [{ id: 1, name: "Product 1", price: 10 }];
    const name = "John Doe";
    
    const source = createMemorySource("/current-orders");
    const history = createHistory(source);

    createNewOrder.mockResolvedValue({ status: 201 });

    const { queryByTestId, getByText } = render(
      <LocationProvider history={history}>
        <Router history={history}>
          <SendOrder
            renderSelectedProducts={renderSelectedProducts}
            renderOrderTotal={renderOrderTotal}
            orderResume={orderResume}
          />
        </Router>
      </LocationProvider>
    );

    fireEvent.change(queryByTestId("client-name-input"), {
      target: { value: name },
    });
    fireEvent.click(queryByTestId("submit-button"));

    expect(createNewOrder).toHaveBeenCalledWith(
      orderResume,
      name,
      undefined
    );
    expect(toast.success).toHaveBeenCalledWith("Sent to kitchen!");
    expect(toast.success).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe("/current-orders");
    expect(getByText("send order")).toBeInTheDocument();
  });
});
