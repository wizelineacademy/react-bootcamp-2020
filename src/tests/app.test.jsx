import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App/App.component';

describe('App page', () => {
  it('Displays the app page', () => {
    render(<App />);
    expect(screen.getByText('Academy project')).toBeTruthy();
  });
});
