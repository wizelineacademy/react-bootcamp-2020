import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import Home from '../Home.page';
import VideoProvider from '../../../VideoState/Provider';

const mockedVideovalue = {
  loading: false,
  error: false,
  videos: [
    {
      author: 'Wizeline',
      description: 'Guadalajara, Jalisco, ...',
      id: 'nmXMgqjQzls',
      img: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      url: 'https://www.youtube.com/watch?v=nmXMgqjQzls'
    },
  ],
  fetchVideos: jest.fn(),
  currentVideo: {
    author: 'Wizeline',
    description: 'Guadalajara, Jalisco, ...',
    id: 'nmXMgqjQzls',
    img: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    url: 'https://www.youtube.com/watch?v=nmXMgqjQzls'
  },
  setCurrentVideo: jest.fn(),
  setFavorites: jest.fn(),
  removeFavorites: jest.fn(),
  favorites: [
    {
      author: 'Wizeline',
      description: 'Guadalajara, Jalisco, ...',
      id: 'nmXMgqjQzls',
      img: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
      title: 'Video Tour | Welcome to Wizeline Guadalajara',
      url: 'https://www.youtube.com/watch?v=nmXMgqjQzls'
    },
  ],
};

describe('render examples', () => {
  it('renders frist React Component', () => {
    const login = jest.fn();
    const logout = jest.fn();
    const authenticated = false;
    const userData = [];
    const error = '';
    render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
        <VideoProvider value={mockedVideovalue}>
         <Home />
         </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Wellcome to the challenge!')).toBeTruthy();
  });
});
