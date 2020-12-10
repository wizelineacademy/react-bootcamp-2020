/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card, Image, Typography } from './VideoCardHome.styles';

describe('Testing Styled Components on VideoCardHome Component', () => {
  test('Should render the Card component without crashing', () => {
    render(<Card />);
  });
  test('Should render the Image component without crashing', () => {
    render(<Image />);
  });
  test('Should render the Typography component without crashing', () => {
    render(<Typography />);
  });
});
