/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { VideoItem, Image, Typography } from './VideoCardList.styles';

describe('Testing VideoCardList Styled Components', () => {
  test('Should render the VideoItem component without crashing', () => {
    render(<VideoItem />);
  });
  test('Should render the Image component without crashing', () => {
    render(<Image />);
  });
  test('Should render the Typography component without crashing', () => {
    render(<Typography />);
  });
});
