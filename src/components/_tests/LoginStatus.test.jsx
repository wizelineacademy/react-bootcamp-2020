import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';

import LoginStatus from '../LoginStatus';

describe('login status component', () => {
  it('test render of the input text in the homepage', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <LoginStatus />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByRole('link')).toBeTruthy();
  });
});
