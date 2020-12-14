/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Menu,
  MenuItem,
  Left,
  Right,
  FavoritesItem,
  InputItem,
  RadioItem,
} from './MenuBar.styles';

describe('Testing Styled Components on MenuBar Component', () => {
  test('Should render the Menu component without crashing', () => {
    render(<Menu />);
  });
  test('Should render the MenuItem Component without crashing', () => {
    render(<MenuItem />);
  });
  test('Should render the Left Component without crashing', () => {
    render(<Left />);
  });
  test('Should render the Right Component without crashing', () => {
    render(<Right />);
  });
  test('Should render the FavoritesItem Component without crashing', () => {
    render(<FavoritesItem />);
  });

  test('Should render the RadioItem Component without crashing', () => {
    render(<RadioItem />);
  });
  test('Should call the onChange callback', async () => {
    const onChange = jest.fn();
    render(<InputItem value="" onChange={onChange}></InputItem>);
    await userEvent.type(screen.getByRole('textbox'), 'Wizeline');
    expect(onChange).toHaveBeenCalledTimes(8);
  });
});
