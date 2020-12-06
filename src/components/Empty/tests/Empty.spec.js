import React from 'react';
import { render, screen } from '@testing-library/react';
import Empty from '../Empty.component';

describe('render examples', () => {
  it('renders frist React Component', () => {
    render(<Empty container="1" />);
    expect(screen.getByText('Sorry! no elements found.')).toBeTruthy();
  });
  it('renders second React Component', () => {
    render(<Empty container="2" />);
    expect(screen.getByText('Sorry! no elements found.')).toBeTruthy();
  });
});
