import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AppTheme from '../AppTheme.component';
import ThemeProvider from '../../../providers/ThemeProvider/Provider';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import VideoProvider from '../../../VideoState/Provider';

export const mokedLightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#FAFAFA',
  itemColor: '#18A67B',
  divider: '#CCC',
  backgroundItem: '#E6F5F2',
};

const mockedValue = {
  isLightTheme: true,
  theme: mokedLightTheme,
  setTheme: jest.fn(),
};

const mockedVideovalue = {
  loading: false,
  error: false,
  videos: [],
  fetchVideos: act(() => jest.fn),
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
    render(
      <BrowserRouter>
        <AuthProvider value={{ login, logout, authenticated, userData, error }}>
          <VideoProvider value={mockedVideovalue}>
            <ThemeProvider value={mockedValue}> 
              <AppTheme theme={mockedValue} />
            </ThemeProvider>
          </VideoProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getByText('Sorry! no elements found.')).toBeTruthy();
  });
});
