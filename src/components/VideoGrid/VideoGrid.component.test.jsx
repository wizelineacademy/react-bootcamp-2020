import React from 'react';
import { render } from '@testing-library/react';
import VideoGrid from './VideoGrid.component';
import { videos } from '../../constants/mock';
import AuthProvider from '../../providers/Auth';

describe('<VideoGrid />', () => {
  it('renders without crashing', () => {
    render(
      <AuthProvider>
        <VideoGrid videos={videos} />
      </AuthProvider>
    );
  });

  it('has all videos', () => {
    const { queryByText } = render(
      <AuthProvider>
        <VideoGrid videos={videos} />
      </AuthProvider>
    );

    videos.forEach((video) => {
      expect(queryByText(video.snippet.title)).toBeVisible();
    });
  });
});
