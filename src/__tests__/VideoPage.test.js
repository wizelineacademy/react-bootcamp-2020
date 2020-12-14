import React from 'react';
import { fireEvent, screen, act, render } from '@testing-library/react';

import App from '../components/App/App.component';
import { getVideos } from '../api/youtubeApi';

jest.mock('../api/gapi', () => {
  return {
    initGoogle: jest.fn(() => {
      return new Promise((resolve) => {
        resolve(true);
      });
    }),
  };
});
jest.mock('../api/youtubeApi', () => {
  return {
    getVideos: jest.fn(() => {
      return [
        {
          kind: 'youtube#searchResult',
          etag: 'L9wNsTq73x0ccQcnafDmfkvfnTw',
          id: {
            kind: 'youtube#video',
            videoId: 'hY7m5jjJ9mM',
          },
          snippet: {
            publishedAt: '2017-05-31T09:30:02Z',
            channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
            title: 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
            description:
              'Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Tiger FunnyWorks',
            liveBroadcastContent: 'none',
            publishTime: '2017-05-31T09:30:02Z',
          },
        },
      ];
    }),
  };
});

describe('Video Page', () => {
  it('Render App and select first video', async () => {
    await act(async () => {
      await render(<App />);
    });

    const result = await getVideos();
    expect(screen.getAllByAltText(/CATS/).length).toBe(1);

    const cats = screen.getByText(result[0].snippet.title);

    await act(async () => {
      await fireEvent.click(cats);
    });

    expect(document.getElementsByTagName('iframe')[0]).toBeInTheDocument();
  });
});
