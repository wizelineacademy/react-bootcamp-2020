import React, { useContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { render, within, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FavoritesProvider, {
  FavoritesContext,
} from '../../../providers/Favorites/Favorites.provider';

import AuthProvider from '../../../providers/Auth/Auth.provider';

const videoMock = {
  key: 'key',
  videoId: 'key',
  title: 'Video title',
  description: 'this is a description',
  imageUrl: '',
  isFavorite: 'true',
};

describe('Favorites provider', () => {
  it('add a video to favorites', () => {
    const TestComponent = () => {
      const { addToFavoritesProvider, isFavoriteVideoProvider } = useContext(
        FavoritesContext
      );

      const handleClick = () => {
        addToFavoritesProvider(videoMock);
      };

      return (
        <>
          <h1 data-testid="value">{`${isFavoriteVideoProvider(videoMock)}`}</h1>
          <button type="button" onClick={() => handleClick()}>
            add
          </button>
        </>
      );
    };

    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <TestComponent />
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );
    const { getByText } = within(getByTestId('value'));

    const button = screen.getByRole('button');
    act(() => {
      fireEvent.click(button);
    });
    expect(getByText('true')).toBeInTheDocument();
  });

  it('add a video to favorites then remove it', () => {
    const TestComponent = () => {
      const {
        removeFromFavoritesProvider,
        addToFavoritesProvider,
        isFavoriteVideoProvider,
      } = useContext(FavoritesContext);

      const handleClickAdd = () => {
        addToFavoritesProvider(videoMock);
      };

      const handleClickRemove = () => {
        removeFromFavoritesProvider(videoMock);
      };

      return (
        <>
          <h1 data-testid="value">{`${isFavoriteVideoProvider(videoMock)}`}</h1>
          <button type="button" onClick={() => handleClickAdd()}>
            add
          </button>
          <button type="button" onClick={() => handleClickRemove()}>
            remove
          </button>
        </>
      );
    };

    const { getByTestId } = render(
      <HashRouter>
        <AuthProvider>
          <FavoritesProvider>
            <TestComponent />
          </FavoritesProvider>
        </AuthProvider>
      </HashRouter>
    );
    const { getByText } = within(getByTestId('value'));

    // const button = screen.getByRole('button');
    const addButon = screen.getByRole('button', {
      name: /add/i,
    });
    const removeButon = screen.getByRole('button', {
      name: /remove/i,
    });

    act(() => {
      fireEvent.click(addButon);
    });
    expect(getByText('true')).toBeInTheDocument();

    act(() => {
      fireEvent.click(removeButon);
    });

    expect(getByText('false')).toBeInTheDocument();
  });
});
