import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import FavoritesProvider from '../../../providers/favorites';
import VideosProvider from '../../../providers/videos';
import App from '../../../components/app';

describe('MainMenuComponent', () => {
  it('Render succesfully the main menu component', () => {
    const { container } = render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <VideosProvider>
              <App />
            </VideosProvider>
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );

    expect(container.getElementsByClassName('MuiSvgIcon-root').length).toBe(3);
  });
});
