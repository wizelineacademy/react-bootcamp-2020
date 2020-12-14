import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar.component';
import AuthProvider from '../../../providers/Auth';

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';

    render(
      // eslint-disable-next-line react/jsx-filename-extension
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
          <Sidebar />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getAllByText('Log in')[0]).toBeTruthy();
  });
});
