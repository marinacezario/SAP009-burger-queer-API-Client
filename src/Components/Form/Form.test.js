import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import { Form } from './Form';

describe('Form component', () => {
  test('renders login form and handles submit', async () => {
    // Mock the handleSubmitForm function
    const handleSubmitForm = jest.fn().mockResolvedValue({ role: 'admin' });

    render(
      <MemoryRouter>
        <Form handleSubmitForm={handleSubmitForm} />
      </MemoryRouter>
    );

    // Check if the login form is rendered
    expect(screen.getByText('LOGIN')).toBeInTheDocument();

    // Fill in the email and password fields
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Senha'), {
      target: { value: 'password123' },
    });

    // Submit the form
    fireEvent.click(screen.getByText('login'));

    // Check if handleSubmitForm was called with the correct email and password
    expect(handleSubmitForm).toHaveBeenCalledWith('test@example.com', 'password123');

    // Wait for the navigation to happen (assuming navigation is implemented correctly)
    await screen.findByText('New Order');

    // Check if the navigation occurred correctly
    expect(screen.getByText('New Order')).toBeInTheDocument();
  });
});
