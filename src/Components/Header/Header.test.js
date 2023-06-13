import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import '@testing-library/jest-dom/extend-expect'; // Importar a extensão do jest-dom

describe('Header component', () => {
  it('renders the header with the logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText('Burguer Queer Logo');
    expect(logoElement).toBeInTheDocument();
  });
});

  