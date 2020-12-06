import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import DetailsPage from '../Details.page';
import VideoProvider from '../../../VideoState/Provider';

const mockedVideovalue = {
  loading: false,
  error: false,
  videos: [],
  fetchVideos: jest.fn(),
  currentVideo: {},
  setCurrentVideo: jest.fn(),
  setFavorites: jest.fn(),
  removeFavorites: jest.fn(),
  favorites: [],
};

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';
    const { container } = render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
        <VideoProvider value={mockedVideovalue}>
         <DetailsPage />
         </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const items = container.querySelectorAll('details-page');
    console.log(items.length);
    expect(items.length).toBe(0);
  });
});
