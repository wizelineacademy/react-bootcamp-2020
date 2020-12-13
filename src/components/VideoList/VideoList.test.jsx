/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { VideoListContainer } from './VideoList.styles';

describe('Testing VideoList Styled Components', () => {
  test('Should render the VideoListContainer component without crashing', () => {
    render(<VideoListContainer />);
  });
});
