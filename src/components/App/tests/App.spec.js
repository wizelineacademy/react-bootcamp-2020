import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer, { act } from 'react-test-renderer';
import App from '../App.component';

describe('render App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders a React Component', () => {
    render(<App />);
    expect(screen.getByText('Loading ...')).toBeTruthy();
  });

  it('renders whith state React Component', async () => {
    let component;
    await act(async () => {
      component = renderer.create(<App />);
    });
    expect(component.toJSON()).toBeTruthy();
  });
});
