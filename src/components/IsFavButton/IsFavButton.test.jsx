/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './IsFavButton.styles';

describe('Testing Styled Components on IsFavButton Component', () => {
  test('Should render the Button component without crashing', () => {
    render(<Button />);
  });
});
