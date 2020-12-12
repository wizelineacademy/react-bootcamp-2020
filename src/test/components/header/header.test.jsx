import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import VideosProvider from '../../../providers/videos';
import AuthProvider from '../../../providers/auth';
import Header from './../../../components/header';

describe('HeaderComponent', () => {
  it('Render header component', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <VideosProvider>
            <Header />
          </VideosProvider>
        </AuthProvider>
      </HashRouter>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('Trigger new search', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <VideosProvider>
            <Header />
          </VideosProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    let searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'Dragon Ball' } });
    const Buttons = screen.queryAllByRole('button');
    const searchButton = Buttons[0];
    act(() => {
      fireEvent.click(searchButton);
    });
    searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput.value).toBe('');
  });

  it('Trigger avatar menu', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <VideosProvider>
            <Header />
          </VideosProvider>
        </AuthProvider>
      </BrowserRouter>
    );

    const Buttons = screen.queryAllByRole('button');
    const avatarButton = Buttons[1];
    act(() => {
      fireEvent.click(avatarButton);
    });

    act(() => {
      fireEvent.click(avatarButton);
    });
  });
});
