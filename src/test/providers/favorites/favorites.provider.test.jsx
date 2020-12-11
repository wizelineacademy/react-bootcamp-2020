import React, { useContext } from 'react';
import { render, within, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import FavoritesProvider, { FavoritesContext } from '../../../providers/favorites';
import {
  setFavoritesVideos,
  addVideoToFavorites,
  removeVideoFromFavorites,
} from '../../../providers/favorites/favorites.actions';

const videosMock = {
  videoId1: {
    etag: 'etag1',
    videoId: 'videoId1',
    image: '',
    title: 'video title 1',
    views: 'views 1',
    timestamp: 'timestamp 1',
    channel: {
      channelId: 'chanelId 1',
      title: 'channel title 1',
      image: 'channel image1',
      description: 'description 1',
      subscribers: 1,
    },
  },
  videoId2: {
    etag: 'etag2',
    videoId: 'videoId2',
    image: '',
    title: 'video title 2',
    views: 'views 2',
    timestamp: 'timestamp 2',
    channel: {
      channelId: 'chanelId 2',
      title: 'channel title 2',
      image: 'channel image 2',
      description: 'description 2',
      subscribers: 2,
    },
  },
};

describe('Favorites provider', () => {
  it('Set default favorites provider value', () => {
    const TestComponent = () => {
      const { favoritesState } = useContext(FavoritesContext);
      const { videos } = favoritesState;
      return (
        <>
          {Object.keys(videos).map((videoKey) => {
            const { etag, videoId } = videos[videoKey];
            return <p data-testid='favorites-id' key={etag}>{`${videoId}`}</p>;
          })}
        </>
      );
    };

    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const INITIAL_STATE = JSON.parse(localStorage.getItem('localFavorites')) || {
      videos: {},
    };
    const initialStateLength = Object.keys(INITIAL_STATE.videos).length;

    const videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
  });

  it('Set favorite videos', () => {
    const TestComponent = () => {
      const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
      const { videos } = favoritesState;

      const handleSetFavoritesVideos = () => {
        favoritesDispatch(setFavoritesVideos(videosMock));
      };

      return (
        <>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <button
            type='button'
            data-testid='setFavoritesVideosButton'
            onClick={handleSetFavoritesVideos}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const INITIAL_STATE = JSON.parse(localStorage.getItem('localFavorites')) || {
      videos: {},
    };
    const initialStateLength = Object.keys(INITIAL_STATE.videos).length;

    let videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
    const setFavoritesVideosButton = screen.getByTestId('setFavoritesVideosButton');
    act(() => {
      fireEvent.click(setFavoritesVideosButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(2);
  });

  it('Add and remove favorite videos', () => {
    const TestComponent = () => {
      const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
      const { videos } = favoritesState;

      const handleAddFavoriteVideo = () => {
        favoritesDispatch(addVideoToFavorites(videosMock.videoId1));
      };

      const handleRemoveFavoriteVideo = () => {
        favoritesDispatch(removeVideoFromFavorites(videosMock.videoId1));
      };

      return (
        <>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <button
            type='button'
            data-testid='addFavoriteVideoButton'
            onClick={handleAddFavoriteVideo}
          ></button>
          <button
            type='button'
            data-testid='removeFavoriteVideoButton'
            onClick={handleRemoveFavoriteVideo}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const INITIAL_STATE = JSON.parse(localStorage.getItem('localFavorites')) || {
      videos: {},
    };
    const initialStateLength = Object.keys(INITIAL_STATE.videos).length;

    let videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
    const addFavoriteVideoButton = screen.getByTestId('addFavoriteVideoButton');
    act(() => {
      fireEvent.click(addFavoriteVideoButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength + 1);
    //Remove video
    const removeFavoriteVideoButton = screen.getByTestId('removeFavoriteVideoButton');
    act(() => {
      fireEvent.click(removeFavoriteVideoButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
  });

  it('Add two times the same video', () => {
    const TestComponent = () => {
      const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
      const { videos } = favoritesState;

      const handleAddFavoriteVideo = () => {
        favoritesDispatch(addVideoToFavorites(videosMock.videoId1));
      };

      return (
        <>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <button
            type='button'
            data-testid='addFavoriteVideoButton'
            onClick={handleAddFavoriteVideo}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const INITIAL_STATE = JSON.parse(localStorage.getItem('localFavorites')) || {
      videos: {},
    };
    const initialStateLength = Object.keys(INITIAL_STATE.videos).length;

    let videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
    const addFavoriteVideoButton = screen.getByTestId('addFavoriteVideoButton');
    act(() => {
      fireEvent.click(addFavoriteVideoButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength + 1);
    //Add agion the video
    act(() => {
      fireEvent.click(addFavoriteVideoButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength + 1);
  });

  it('Try to remove a video that dosen´t exist', () => {
    const TestComponent = () => {
      const { favoritesState, favoritesDispatch } = useContext(FavoritesContext);
      const { videos } = favoritesState;

      const handleRemoveFavoriteVideo = () => {
        favoritesDispatch(removeVideoFromFavorites(videosMock.videoId1));
      };

      return (
        <>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <button
            type='button'
            data-testid='removeFavoriteVideoButton'
            onClick={handleRemoveFavoriteVideo}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    const INITIAL_STATE = JSON.parse(localStorage.getItem('localFavorites')) || {
      videos: {},
    };
    const initialStateLength = Object.keys(INITIAL_STATE.videos).length;

    let videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
    //Remove video
    const removeFavoriteVideoButton = screen.getByTestId('removeFavoriteVideoButton');
    act(() => {
      fireEvent.click(removeFavoriteVideoButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(initialStateLength);
  });
});
