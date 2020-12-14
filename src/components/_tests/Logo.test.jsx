import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('logo component', () => {
  it('test render of the img', () => {
    render(<Logo />);
    expect(screen.getByAltText('YouTube Logo')).toBeTruthy();
  });
});
