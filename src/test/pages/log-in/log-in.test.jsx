import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import LogInPage from '../../../pages/log-in';

describe('LogInPage', () => {
  it('Render Log In page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <LogInPage />
        </AuthProvider>
      </HashRouter>
    );

    expect(screen.getAllByText('Sign in')).toBeTruthy();
  });
});
