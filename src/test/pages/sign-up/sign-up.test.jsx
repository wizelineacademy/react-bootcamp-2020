import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import SignUpPage from '../../../pages/sign-up';

describe('SignUpPage', () => {
  it('Render Sing up Page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <SignUpPage />
        </AuthProvider>
      </HashRouter>
    );

    expect(screen.getByText('Sign up')).toBeTruthy();
  });
});
