import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../setupTests';

import App from '../App/App.component';

const username = 'wizeline';
const password = 'Rocks!';

describe('Login form', () => {
  it('renders username + password input + login button', () => {
    renderWithRouter(<App />, { route: '/login' });

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('login')).toBeInTheDocument();
    expect(screen.getByDisplayValue('login')).toHaveAttribute('type', 'submit');
  });

  it('updates username + password input values on typing', () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText(/username/i), username);
    expect(screen.getByPlaceholderText(/username/i)).toHaveValue(username);
    userEvent.type(screen.getByPlaceholderText(/password/i), password);
    expect(screen.getByPlaceholderText(/password/i)).toHaveValue(password);
  });

  // @todo fix error
  xit('submits username + password', () => {
    const onSubmit = jest.fn();

    renderWithRouter(<App />, { route: '/login' });

    userEvent.type(screen.getByPlaceholderText(/username/i), username);
    userEvent.type(screen.getByPlaceholderText(/password/i), password);
    act(() => {
      userEvent.click(screen.getByDisplayValue('login'));
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      username,
      password,
    });
  });
});
