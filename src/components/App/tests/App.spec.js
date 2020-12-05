import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.component';

describe('render examples', () => {
  it('renders a React Component', () => {
    render(<App />);
    expect(screen.getByText('Loading ...')).toBeTruthy();
  });
});
