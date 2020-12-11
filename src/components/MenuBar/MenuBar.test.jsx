/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu, MenuItem } from './MenuBar.styles';

describe('Testing Styled Components on MenuBar Component', () => {
  test('Should render the Menu component without crashing', () => {
    render(<Menu />);
  });
  test('Should render the MenuItem component without crashing', () => {
    render(<MenuItem />);
  });
});
