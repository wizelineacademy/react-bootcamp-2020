import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoListGrid } from '../VideoListGrid';

describe('VideoListGrid', () => {
  it('shows wllcome Messages', () => {
    const welcome = 'welcome';
    render(<VideoListGrid welcomeMessage={welcome} listSize={0} />);
    const list = screen.getByText(welcome);
    expect(list.innerHTML).toBe(welcome);
  });

  it('shows not found messages', () => {
    const notFoundMassage = 'not found';
    render(<VideoListGrid emptyMessage={notFoundMassage} listSize={0} />);
    const list = screen.getByText(notFoundMassage);
    expect(list.innerHTML).toBe(notFoundMassage);
  });

  it('shows dosent not found messages', () => {
    const notFoundMassage = 'not found';
    render(<VideoListGrid emptyMessage={notFoundMassage} listSize={1} />);
    const list = screen.queryByText(notFoundMassage);
    expect(list).toBeFalsy();
  });
});
