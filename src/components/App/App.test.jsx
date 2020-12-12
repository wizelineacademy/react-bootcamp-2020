import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from './App.component';
import { SEARCH_PLACEHOLDER } from '../../utils/constants';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

function isHomePage() {
  const { container } = render(<App />);
  expect(container.querySelector('section.homepage')).toBeInTheDocument();
}

function isLoginPage() {
  const { container } = render(<App />);
  expect(container.querySelector('section.loginpage')).toBeInTheDocument();
}

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

    expect(screen.getByRole('banner')).toHaveTextContent(/home/i);
    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument();
    expect(screen.getByRole('banner')).toHaveTextContent(/login/i);

    isHomePage();
  });
});

describe('Navigation tests', () => {
  it('navigates from home page to login page', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByText(/login/i));

    isLoginPage();
  });

  it('navigates from login page to home page', () => {
    renderWithRouter(<App />, { route: '/login' });
    userEvent.click(screen.getByText(/home/i));

    isHomePage();
  });
});
