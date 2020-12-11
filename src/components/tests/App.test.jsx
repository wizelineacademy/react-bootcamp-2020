import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App/App.component';

describe('App', () => {
  const mockInit = () => {
    global.matchMedia = jest.fn().mockImplementation(() => {
      return {
        value: 'dark',
        addEventListener: jest.fn(),
        matches: true,
      };
    });
  };

  const mockInitCleanUp = () => {
    global.fetch.mockClear();
    delete global.fetch;
  };

  beforeAll(() => {
    mockInit();
  });

  afterAll(() => mockInitCleanUp());

  it('renders main', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeTruthy();
  });
});
