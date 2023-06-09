import React from "react";
import { fireEvent, render, screen, waitFor, userEvent } from '@testing-library/react';
import {Form} from './Form';
import Login from  '../../Pages/Login/Login'
import {handleSubmitForm} from '../../API/users'
import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { UserEvent } from "@testing-library/user-event/";


// jest.mock('../../API/users');

jest.mock('react-router-dom');



test("handles form submission", async () => {
  const mockNavigate = jest.fn();
  const mockHandleSubmitForm = jest.fn().mockResolvedValue({ role: "admin" });
  const mockPreventDefault = jest.fn();

  // Substitui a função `useNavigate` para verificar se a navegação foi chamada corretamente
  jest.mock("react-router-dom", () => ({
    useNavigate: () => mockNavigate,
  }));

  // Substitui a função `handleSubmitForm` para verificar se ela é chamada corretamente
  jest.mock("../../API/users", () => ({
    handleSubmitForm: mockHandleSubmitForm,
  }));

  render(<Form />);

  console.log(screen.debug());
  // Insere valores nos campos de entrada
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByTestId("password-input"), {
    target: { value: "password123" },
  });

  // Simula o envio do formulário
  fireEvent.submit(screen.getByTestId("submit-button"), {
    preventDefault: mockPreventDefault,
  });

  // Verifica se a função `preventDefault` foi chamada no evento de submit
  expect(mockPreventDefault).toHaveBeenCalled();

  // Aguarda a resolução da promessa para a função `handleSubmitForm`
  await screen.findByText("LOGIN");

  // Verifica se a função `handleSubmitForm` foi chamada corretamente
  expect(mockHandleSubmitForm).toHaveBeenCalledWith(
    "test@example.com",
    "password123"
  );

  // Verifica se a função `useNavigate` foi chamada corretamente com a rota correta
  expect(mockNavigate).toHaveBeenCalledWith("/new-order");
});
