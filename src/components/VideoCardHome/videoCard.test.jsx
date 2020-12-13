/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card, Image, Typography } from './VideoCardHome.styles';
import VideoCardHome from './VideoCardHome';

const mockVideo = {
  snippet: {
    thumbnails: {
      medium: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
      },
    },
    title: 'Video Tour | Welcome to Wizeline Guadalajara',
    publishedTime: '2019-09-30T23:54:32Z',
  },
  id: {
    videoId: 'nmXMgqjQzls',
  },
};

describe('Testing Styled Components on VideoCardHome Component', () => {
  // test('Should render the VideoCardHome component with an Image', () => {
  //   render(<VideoCardHome video={mockVideo} key={0} />);
  // });
  // test('Should render the Card component without crashing', () => {
  //   render(<Card />);
  // });
  // test('Should render the Image component without crashing', () => {
  //   render(<Image />);
  //   expect(screen.getByRole('img')).toHaveAttribute('src');
  // });
  test('Should render the Typography component without crashing', () => {
    render(<Typography />);
  });
});
