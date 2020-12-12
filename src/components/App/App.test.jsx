import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import App from './App.component';
import { SEARCH_PLACEHOLDER } from '../../utils/constants';

describe('Smoke test', () => {
  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('Layout tests', () => {
  it('renders the home page, with header (navigation + search + login) + section', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toContainElement(screen.getByRole('navigation'));

    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByRole('banner')).toHaveTextContent('login');
  });
});
