/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { VideoFrame, VideoHeader, Typography } from './VideoPlayer.styles';

describe('Testing VideoPlayer Styled Components', () => {
  test('Should render the VideoFrame component without crashing', () => {
    render(<VideoFrame />);
  });
  test('Should render the VideoHeader component without crashing', () => {
    render(<VideoHeader />);
  });
  test('Should render the Typography component without crashing', () => {
    render(<Typography />);
  });
});
