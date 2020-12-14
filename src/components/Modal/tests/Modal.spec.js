import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import Modal from '../Modal.component';

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';
    render(
      <AuthProvider value={{ login, logout, authenticated, userData, error }}>
        <Modal show={false} handleClose={jest.fn()} handleLogin={jest.fn()} />
      </AuthProvider>);
    expect(screen.getByText('Login to the application')).toBeTruthy();
  });
});
