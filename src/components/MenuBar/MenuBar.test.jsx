/* eslint-disable */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu, MenuItem } from './MenuBar.styles';
import { Input } from 'semantic-ui-react';
import MenuBar from './MenuBar';

describe('Testing Styled Components on MenuBar Component', () => {
  test('Should render the Menu component without crashing', () => {
    render(<Menu />);
  });
  test('Should render the MenuItem component without crashing', () => {
    render(<MenuItem />);
  });
  test('Should call the onChange callback', async () => {
    const onChange = jest.fn();
    render(<Input value="" onChange={onChange}></Input>);
    await userEvent.type(screen.getByRole('textbox'), 'Wizeline');
    expect(onChange).toHaveBeenCalledTimes(8);
  });
});
