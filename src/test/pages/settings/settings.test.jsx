import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import ThemeProvider from '../../../providers/theme';
import SettingsPage from './../../../pages/settings';

describe('SettingsPage', () => {
  it('Render Settings page', () => {
    render(
      <HashRouter>
        <ThemeProvider>
          <SettingsPage />
        </ThemeProvider>
      </HashRouter>
    );

    expect(screen.getAllByText('Settings')).toBeTruthy();
  });

  it('Trigger change theme action', () => {
    render(
      <HashRouter>
        <ThemeProvider>
          <SettingsPage />
        </ThemeProvider>
      </HashRouter>
    );

    const toggleButton = screen.getByRole('checkbox');

    act(() => {
      fireEvent.click(toggleButton);
    });
    act(() => {
      fireEvent.click(toggleButton);
    });
  });
});
