import React from 'react';
import { render, screen } from '@testing-library/react';

import Video from '../Video';

describe('video component', () => {
  it('test render the loading text at the beggining', () => {
    render(<Video videoId="HGxydIfJNhA" />);
    expect(screen.getByText('Loading video...')).toBeTruthy();
  });
  it('test render of the iframe', async () => {
    render(<Video videoId="HGxydIfJNhA" />);
    await screen.findAllByRole('button');
    expect(screen.findAllByRole('button')).toBeTruthy();
  });
});
