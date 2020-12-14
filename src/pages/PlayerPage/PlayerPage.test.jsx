/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Container, VideoPlayerContainer, VideoListContainer } from './PlayerPage.styles';

describe('Testing Styled Components on PlayerPage Component', () => {
  test('Should render the Container component without crashing', () => {
    render(<Container />);
  });
  test('Should render the VideoPlayerContainer component without crashing', () => {
    render(<VideoPlayerContainer />);
  });
  test('Should render the VideoListContainer component without crashing', () => {
    render(<VideoListContainer />);
  });
});
