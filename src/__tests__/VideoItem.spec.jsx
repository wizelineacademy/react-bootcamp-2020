import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthProvider from '../providers/Auth';
import VideoItem from '../components/Video/VideoItem/VideoItem.component';

describe('Header Component test', () => {
  const video = {
    title: 'title',
    thumbnail: 'title',
    channelTitle: 'channelTitle',
    videoId: 'videoId',
  };
  it('Find input search', () => {
    render(
      <AuthProvider>
        <VideoItem video={video} />
      </AuthProvider>
    );

    const img = screen.queryByRole('img');
    expect(img).toHaveProperty('alt');
  });
});
