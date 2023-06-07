import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom'; 

describe('Input component', () => {
  it('renders without crashing', () => {
    render(
      <Input
        type="email"
        placeholder="Email"
        value="email"
      />
    );
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
  });
  it('should call onChange when input value changes', () => {
    const onChangeMock = jest.fn();

    render(<Input onChange={onChangeMock} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Test value' } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('Test value');
  });

});