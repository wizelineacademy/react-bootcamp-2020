import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithRouter } from '../../setupTests';

import App from '../App/App.component';
import LoginForm from './LoginForm.component';

const username = 'wizeline';
const password = 'Rocks!';

describe('Login form', () => {
  it('navigates to and renders username + password input + login button', () => {
    renderWithRouter(<App />, { route: '/login' });

    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue('login')).toBeInTheDocument();
    expect(screen.getByDisplayValue('login')).toHaveAttribute('type', 'submit');
  });

  it('updates username + password input values on typing', () => {
    render(
      <App>
        <LoginForm />
      </App>
    );

    userEvent.type(screen.getByPlaceholderText(/username/i), username);
    expect(screen.getByPlaceholderText(/username/i)).toHaveValue(username);
    userEvent.type(screen.getByPlaceholderText(/password/i), password);
    expect(screen.getByPlaceholderText(/password/i)).toHaveValue(password);
  });
});
