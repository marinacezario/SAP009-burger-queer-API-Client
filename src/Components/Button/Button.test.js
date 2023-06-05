import { render, screen } from "@testing-library/react";
import Botao from '../componentes/Botao/Botao.js'
import React from "react";
import '@testing-library/jest-dom/extend-expect'; 


test('should render the button correctly', () => {
  const onClickMock = jest.fn();

  const { getByText } = render(
    <Botao onClick={onClickMock}>
      Clique aqui
    </Botao>
  );

  const botao = getByText('Clique aqui');
  expect(botao).toBeInTheDocument();

  fireEvent.click(botao);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});