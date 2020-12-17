import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import FavoritesPage from '../../../pages/Favorites/Favorites.page';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import VideoProvider from '../../../providers/Video/Video.provider';
import FavoritesProvider from '../../../providers/Favorites/Favorites.provider';

describe('favorites page', () => {
  it('Displays the favorites pages', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <FavoritesProvider>
              <FavoritesPage />
            </FavoritesProvider>
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByText('welcome, to your favorites')).toBeTruthy();
  });
});
