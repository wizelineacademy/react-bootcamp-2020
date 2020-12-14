import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthProvider from '../providers/Auth';
import SideNav from '../components/SideNav/SideNav.component';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Header Component test', () => {
  it('Find Home title', () => {
    render(
      <AuthProvider>
        <SideNav />
      </AuthProvider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('Find footer text', () => {
    render(
      <AuthProvider>
        <SideNav />
      </AuthProvider>
    );

    expect(screen.getByText('☺ 2020 Ricardo Labarca')).toBeTruthy();
  });
});
