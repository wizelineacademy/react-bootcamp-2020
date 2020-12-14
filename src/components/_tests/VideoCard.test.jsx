import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';

import VideoCard from '../VideoCard';

const video = {
  publishedAt: '2015-03-11T13:24:50Z',
  channelId: 'UCU4sLeUhvuRXvmipSOxkG8Q',
  title: 'El impresionante golpe de la galera boxeadora (camarón mantis)',
  description:
    'Camarón mantis, el crustáceo que propina golpes comparables a balazos. Las pequeñas pero explosivas mazas de esta solitaria criatura que pueden generar ...',
  thumbnails: {
    default: {
      url: 'https://i.ytimg.com/vi/2baZq1jUTVI/default.jpg',
      width: 120,
      height: 90,
    },
    medium: {
      url: 'https://i.ytimg.com/vi/2baZq1jUTVI/mqdefault.jpg',
      width: 320,
      height: 180,
    },
    high: {
      url: 'https://i.ytimg.com/vi/2baZq1jUTVI/hqdefault.jpg',
      width: 480,
      height: 360,
    },
  },
  channelTitle: 'Sr Absurdistan',
  liveBroadcastContent: 'none',
  publishTime: '2015-03-11T13:24:50Z',
};

describe('video card component', () => {
  it('test render the component', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoCard videoid="HGxydIfJNhA" video={video} />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByRole('link')).toBeTruthy();
  });

  it('test render the component as related video', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoCard videoid="HGxydIfJNhA" video={video} isRelated />
        </AuthProvider>
      </HashRouter>
    );
    expect(
      screen.getByAltText(
        'El impresionante golpe de la galera boxeadora (camarón mantis)'
      )
    ).toBeTruthy();
  });

  it('test with no video data', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoCard videoid="HGxydIfJNhA" />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.queryByRole('link')).toBeFalsy();
  });

  it('test favorite button not present because there is not user log in', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideoCard videoid="HGxydIfJNhA" video={video} />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.queryByRole('button')).toBeNull();
  });
});
