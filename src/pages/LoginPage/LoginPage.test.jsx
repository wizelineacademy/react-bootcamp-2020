/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { H1 } from './LoginPage.styles';
import LoginPage from './LoginPage';
import AuthProvider from '../../providers/Auth/Auth.provider';

describe('Testing on LoginPage Component', () => {
  beforeAll(() => {});

  test('Should render the LoginPage component without crashing', () => {
    render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );
    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.getByPlaceholderText('Username')).toBeTruthy();
    expect(screen.getByPlaceholderText('Password')).toBeTruthy();
  });
  xtest('Should call onSubmit callback when Submit Click', () => {
    const onSubmit = jest.fn();
    render(
      <AuthProvider>
        <LoginPage onSubmit={onSubmit} />
      </AuthProvider>
    );
    fireEvent.click(screen.getByText('Submit'));
    expect(onSubmit).toHaveBeenCalled();
  });
  test('Should render the H1 Styled Component without crashing', () => {
    render(<H1 />);
  });
});
