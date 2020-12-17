import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Menu from '../../../components/Menu/Menu.component';
import LocalThemeProvider from '../../../providers/Theme/LocalTheme.provider';
import AuthProvider from '../../../providers/Auth/Auth.provider';

describe('Menu component', () => {
  it('Displays the menu with the information', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <LocalThemeProvider>
            <Menu />
          </LocalThemeProvider>
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByText('Home')).toBeTruthy();
    expect(screen.getByText('Login')).toBeTruthy();
  });

  it('Displays the menu and fire event on theme changer', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <LocalThemeProvider>
            <Menu />
          </LocalThemeProvider>
        </AuthProvider>
      </HashRouter>
    );
    const check = screen.getByRole('checkbox');

    act(() => {
      fireEvent.click(check);
    });
  });
});
