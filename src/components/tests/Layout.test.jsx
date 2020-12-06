import React from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Layout from '../Layout/Layout.component';
import generalTheme from '../../utils/Themes/generalTheme';
import UserData from '../../providers/AppData';
import AuthProvider from '../../providers/Auth';

describe('Layout', () => {
  it('should render navigation always', () => {
    render(
      <AuthProvider>
        <UserData>
          <ThemeProvider theme={generalTheme}>
            <Layout />
          </ThemeProvider>
        </UserData>
      </AuthProvider>
    );
    const navigation = screen.queryByRole('navigation');
    expect(navigation).toBeTruthy();
  });
  it('should render header always', () => {
    render(
      <AuthProvider>
        <UserData>
          <ThemeProvider theme={generalTheme}>
            <Layout />
          </ThemeProvider>
        </UserData>
      </AuthProvider>
    );
    const header = screen.queryByRole('banner');
    expect(header).toBeTruthy();
  });
});
