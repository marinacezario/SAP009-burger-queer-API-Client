import React from 'react';
import { render, screen, /* fireEvent, */ waitFor } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom'; 
import userEvent from '@testing-library/user-event';

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
  it('should call onChange when input value changes', async () => {
    const onChangeMock = jest.fn();

    render(<Input
      onChange={onChangeMock}
      value= 'T'/>);
    const input = screen.getByRole('textbox');
      userEvent.type(input, 'T');
    //fireEvent.change(input, { target: { value: 'Test value' } });
    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'T' } }));
    })
  });

  it('should check the input type', async () => {
    const onChangeMock = jest.fn();

    render(<Input
      onChange={onChangeMock}
      value= 'T'/>);
    const input = screen.getByRole('textbox');
      userEvent.type(input, 'T');
    //fireEvent.change(input, { target: { value: 'Test value' } });
    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'T' } }));
    })
  });
});