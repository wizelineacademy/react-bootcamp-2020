import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../NotFound.page';
import AuthProvider from '../../../providers/Auth/Auth.provider';

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';
    render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
         <NotFound />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Sorry! Page not found.')).toBeTruthy();
  });
});
