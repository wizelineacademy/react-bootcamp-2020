import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/auth';
import VideosProvider from './../../../providers/videos';
import FavoritesProvider from './../../../providers/favorites';
import HomePage from '../../../pages/home';

describe('LogInPage', () => {
  it('Render Log In page', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <VideosProvider>
              <HomePage />
            </VideosProvider>
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );

    expect(
      screen.getAllByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeTruthy();
  });
});
