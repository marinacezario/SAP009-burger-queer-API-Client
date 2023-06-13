import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header component', () => {
  it('renders the header with the logo', () => {
   
    render(<Header />);
    const logoElement = screen.getByAltText('Burguer Queer Logo');
    
    expect(logoElement).toBeInTheDocument();
  });
});
