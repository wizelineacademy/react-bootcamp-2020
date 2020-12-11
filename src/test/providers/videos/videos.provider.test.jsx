import React, { useContext } from 'react';
import { render, within, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import VideosProvider, { VideosContext } from '../../../providers/videos';
import {
  setSearchQuery,
  fetchVideosStart,
  fetchVideosSuccess,
  setVideoToWatch,
  fetchVideosFailure,
} from '../../../providers/videos/videos.actions';

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

describe('Videos provider base paths', () => {
  it('Set default video context values', () => {
    const TestComponent = () => {
      const { videosState } = useContext(VideosContext);
      const { searchQuery, videos, videoToWatch, isFetching, errorMessage } = videosState;

      return (
        <>
          <p data-testid='searchQueryId'>{`${searchQuery}`}</p>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <p data-testid='videoToWatchId'>{`${videoToWatch.videoId}`}</p>
          <p data-testid='isFetchingId'>{`${isFetching}`}</p>
          <p data-testid='errorMessageId'>{`${errorMessage}`}</p>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    const searchQueryText = within(getByTestId('searchQueryId')).queryByText('');
    expect(searchQueryText).toBeInTheDocument();

    const videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(20);

    const videoToWatchText = within(getByTestId('videoToWatchId')).queryByText('');
    expect(videoToWatchText).not.toBeInTheDocument();

    const isFetchingText = within(getByTestId('isFetchingId')).queryByText('false');
    expect(isFetchingText).toBeInTheDocument();

    const errorMessageText = within(getByTestId('errorMessageId')).queryByText('');
    expect(errorMessageText).toBeInTheDocument();
  });

  it('Change value of serchquery', () => {
    const TestComponent = () => {
      const { videosState, videosDispatch } = useContext(VideosContext);

      const handleChangeSearchQuery = () => {
        videosDispatch(setSearchQuery('Wizeline'));
      };

      return (
        <>
          <p data-testid='queryText'>{`${videosState.searchQuery}`}</p>
          <button
            type='button'
            data-testid='changeQueryButton'
            onClick={handleChangeSearchQuery}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    const { getByText } = within(getByTestId('queryText'));
    expect(getByText('')).toBeInTheDocument();
    const changeQueryButton = screen.getByTestId('changeQueryButton');
    act(() => {
      fireEvent.click(changeQueryButton);
    });
    expect(getByText('Wizeline')).toBeInTheDocument();
  });

  it('Change value of isFetching start', () => {
    const TestComponent = () => {
      const { videosState, videosDispatch } = useContext(VideosContext);

      const handleChangeFetching = () => {
        videosDispatch(fetchVideosStart());
      };

      return (
        <>
          <p data-testid='fetchText'>{`${videosState.isFetching}`}</p>
          <button
            type='button'
            data-testid='changeFetchingButton'
            onClick={handleChangeFetching}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    const { getByText } = within(getByTestId('fetchText'));
    expect(getByText('false')).toBeInTheDocument();
    const changeFetchingButton = screen.getByTestId('changeFetchingButton');
    act(() => {
      fireEvent.click(changeFetchingButton);
    });
    expect(getByText('true')).toBeInTheDocument();
  });

  it('Change videos for fetched data', () => {
    const TestComponent = () => {
      const { videosState, videosDispatch } = useContext(VideosContext);
      const { videos } = videosState;

      const handleFetchVideos = () => {
        videosDispatch(fetchVideosSuccess(videosMock));
      };

      return (
        <>
          <>
            {Object.keys(videos).map((videoKey) => {
              const { etag, videoId } = videos[videoKey];
              return <p data-testid='video-id' key={etag}>{`${videoId}`}</p>;
            })}
          </>
          <p data-testid='fetchText'>{`${videosState.isFetching}`}</p>
          <button
            type='button'
            data-testid='handleFetchVideosButton'
            onClick={handleFetchVideos}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    let videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(20);
    const handleFetchVideosButton = screen.getByTestId('handleFetchVideosButton');
    act(() => {
      fireEvent.click(handleFetchVideosButton);
    });
    videosIdObjects = screen.queryAllByTestId('video-id');
    expect(videosIdObjects).toHaveLength(2);
  });

  it('Change videoToWatch', () => {
    const TestComponent = () => {
      const { videosState, videosDispatch } = useContext(VideosContext);
      const { videoToWatch } = videosState;

      const handleChangeFetching = () => {
        videosDispatch(setVideoToWatch(videosMock.videoId1));
      };

      return (
        <>
          <p data-testid='videoTitleId'>{videoToWatch.title}</p>
          <button
            type='button'
            data-testid='changeTitleButton'
            onClick={handleChangeFetching}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    const { getByText } = within(getByTestId('videoTitleId'));
    const changeTitleButton = screen.getByTestId('changeTitleButton');
    act(() => {
      fireEvent.click(changeTitleButton);
    });
    expect(getByText('video title 1')).toBeInTheDocument();
  });

  it('Change errorMessage', () => {
    const TestComponent = () => {
      const { videosState, videosDispatch } = useContext(VideosContext);
      const { errorMessage } = videosState;

      const handleChangeFetching = () => {
        videosDispatch(fetchVideosFailure('Error'));
      };

      return (
        <>
          <p data-testid='errorId'>{errorMessage}</p>
          <button
            type='button'
            data-testid='changeErrorButton'
            onClick={handleChangeFetching}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <VideosProvider>
        <TestComponent />
      </VideosProvider>
    );

    const { getByText } = within(getByTestId('errorId'));
    expect(getByText('')).toBeInTheDocument();
    const changeErrorButton = screen.getByTestId('changeErrorButton');
    act(() => {
      fireEvent.click(changeErrorButton);
    });
    expect(getByText('Error')).toBeInTheDocument();
  });
});
