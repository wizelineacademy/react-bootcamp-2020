import React from 'react';
import { render, screen } from '@testing-library/react';
import Player from '../../../components/Player/Player.component';
import VideoProvider from '../../../providers/Video/Video.provider';
import FavoritesProvider from '../../../providers/Favorites/Favorites.provider';
import AuthProvider from '../../../providers/Auth/Auth.provider';

describe('Player component', () => {
  it('Displays the player component', () => {
    render(
      <AuthProvider>
        <VideoProvider>
          <FavoritesProvider>
            <Player />
          </FavoritesProvider>
        </VideoProvider>
      </AuthProvider>
    );
    expect(
      screen.getAllByRole('button', {
        hidden: true,
      })
    ).toBeTruthy();
  });
});
