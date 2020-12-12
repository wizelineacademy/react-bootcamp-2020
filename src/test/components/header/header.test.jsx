import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HashRouter } from 'react-router-dom';
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
});
