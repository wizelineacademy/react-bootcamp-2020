import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import VideosProvider from '../../../providers/videos';
import AuthProvider from '../../../providers/auth';
import FavoritesProvider from '../../../providers/favorites';
import WatchVideoPage from '../../../pages/watch-video';

describe('WatchVideoPage', () => {
  it('Render WatchVideo Page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <VideosProvider>
              <WatchVideoPage />
            </VideosProvider>
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );

    expect(
      screen.queryAllByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeTruthy();
  });
});
