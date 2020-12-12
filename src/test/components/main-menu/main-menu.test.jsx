import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import MainMenu from '../../../components/main-menu';

describe('MainMenuComponent', () => {
  it('Render succesfully the main menu component', () => {
    const { container } = render(
      <HashRouter>
        <AuthProvider>
          <MainMenu data-testid='mainMenuId' />
        </AuthProvider>
      </HashRouter>
    );

    expect(container.getElementsByClassName('MuiSvgIcon-root').length).toBe(1);
  });
});
