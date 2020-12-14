/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './IsFavButton.styles';
import IsFavButton from './IsFavButton';
import AuthProvider from '../../providers/Auth/Auth.provider';

describe('Testing Styled Components on IsFavButton Component', () => {
  test('Should render the Button Component without crashing', () => {
    render(<Button />);
  });
});
