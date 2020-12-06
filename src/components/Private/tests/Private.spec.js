import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from '../Private.component';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import FavoritePage from '../../../pages/Favorite';

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = true;
    const userData = [];
    const error = '';
    render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>  
              <Private> <FavoritePage /> </Private>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen).toBeDefined();
  });

  it('renders not auth React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';
    const { container } = render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
          <Private>
            <FavoritePage />
          </Private>
        </AuthProvider>
      </BrowserRouter>
    );

    const items = container.querySelector('div');

    expect(items).toBe(null);
  });
});
