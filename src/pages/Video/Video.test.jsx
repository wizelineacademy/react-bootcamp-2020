import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import VideoPage from './Video.page';
import { getRelatedVideos } from '../../api/videos.api';

jest.mock('../../api/videos.api');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '123',
  }),
  useRouteMatch: () => ({ url: '/video/123' }),
}));

const videoMock = {
  id: '123',
  snippet: {
    title: 'Video Title 1',
    description: 'Mock description',
    thumbnails: {
      high: {
        url: 'imageUrl',
      },
    },
  },
};

const relatedVideoMock = {
  id: '456',
  snippet: {
    title: 'Video Title 2',
    description: 'Mock description 2',
    thumbnails: {
      medium: {
        url: 'imageUrl',
      },
    },
  },
};

describe('VideoPage', () => {
  const mockStore = configureStore();
  it('Should show a favorites button when the user is logged in', async () => {
    const initialState = {
      auth: {
        authenticated: true,
      },
      videos: {
        videos: [videoMock],
        favoriteVideos: [],
      },
    };
    const store = mockStore(initialState);
    getRelatedVideos.mockResolvedValueOnce({ data: { items: [relatedVideoMock] } });
    const wrapper = mount(
      <MemoryRouter>
        <ThemeProvider theme={{ colors: { darkgreen: '' }, fonts: { heading: '' } }}>
          <VideoPage store={store} />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(
      wrapper.find({ 'data-testid': 'addToFavorites' }).exists() ||
        wrapper.find({ 'data-testid': 'removeFromFavorites' }).exists()
    ).toBeTruthy();
  });

  it('Should show the video information', async () => {
    getRelatedVideos.mockResolvedValueOnce({ data: { items: [relatedVideoMock] } });
    const initialState = {
      auth: {
        authenticated: true,
      },
      videos: {
        videos: [videoMock],
        favoriteVideos: [],
      },
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <MemoryRouter>
        <ThemeProvider theme={{ colors: { darkgreen: '' }, fonts: { heading: '' } }}>
          <VideoPage store={store} />
        </ThemeProvider>
      </MemoryRouter>
    );
    expect(wrapper.find({ 'data-testid': 'iframe' }).exists()).toBeTruthy();
    expect(wrapper.find({ 'data-testid': 'videoHeading' }).exists()).toBeTruthy();
    expect(wrapper.find({ 'data-testid': 'videoDescription' }).exists()).toBeTruthy();
  });
});
