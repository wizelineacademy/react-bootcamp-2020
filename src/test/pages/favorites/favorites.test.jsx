import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import VideosProvider from './../../../providers/videos';
import FavoritesProvider from './../../../providers/favorites';
import FavoritesPage from '../../../pages/favorites';

describe('LogInPage', () => {
  it('Render Log In page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <VideosProvider>
              <FavoritesPage />
            </VideosProvider>
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );

    expect(screen.getByText('Favorite videos')).toBeTruthy();
  });
});
