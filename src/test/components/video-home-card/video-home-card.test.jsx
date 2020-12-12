import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import VideosProvider from '../../../providers/videos';
import VideHomeCard from '../../../components/video-home-card';

const videosMock = {
  videoId1: {
    etag: 'etag1',
    videoId: 'videoId1',
    image: '',
    title: 'video title',
    views: 'views 1',
    timestamp: 'timestamp 1',
    channel: { title: 'channel title 1', image: 'channel image1' },
  },
  videoId2: {
    etag: 'etag2',
    videoId: 'videoId2',
    image: '',
    title: 'video title',
    views: 'views 2',
    timestamp: 'timestamp 2',
    channel: { title: 'channel title 2', image: 'channel image 2' },
  },
};

describe('VideHomeCardComponent', () => {
  it('Render 2 VideHomeCardComponent with the videos information', () => {
    const videoKey1 = 'videoId1';
    const videoKey2 = 'videoId2';
    render(
      <HashRouter>
        <VideosProvider>
          <VideHomeCard key={videosMock[videoKey1].etag} video={videosMock[videoKey1]} />
          <VideHomeCard key={videosMock[videoKey2].etag} video={videosMock[videoKey2]} />
        </VideosProvider>
      </HashRouter>
    );

    expect(screen.getAllByText('video title').length).toBe(2);
  });
});
