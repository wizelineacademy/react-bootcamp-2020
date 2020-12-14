import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VideoCard from './VideoCard.component';
import { videos } from '../../constants/mock';
import AuthProvider from '../../providers/Auth';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<VideoCard />', () => {
  it('renders without crashing', () => {
    render(
      <AuthProvider>
        <VideoCard video={videos[0]} />
      </AuthProvider>
    );
  });

  it('renders the title', () => {
    const video = videos[0];
    const container = render(
      <AuthProvider>
        <VideoCard video={video} />
      </AuthProvider>
    );

    expect(container.queryByText(video.snippet.title)).toBeVisible();
  });

  it('redirects to the watch video page on text click', () => {
    const video = videos[0];
    const { queryByText } = render(
      <AuthProvider>
        <VideoCard video={video} />
      </AuthProvider>
    );

    fireEvent.click(queryByText(video.snippet.title));
    expect(mockHistoryPush).toHaveBeenCalledWith(`/watch/${video.id.videoId}`);
  });
});
