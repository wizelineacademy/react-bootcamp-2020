import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoItem from '../VideoItem.component';

describe('render examples', () => {
  it('renders frist React Component', () => {
    render(<BrowserRouter><VideoItem id="1" title="test" author="test" img="imge_text" onClick={jest.fn()}/></BrowserRouter>);
    expect(screen.getByText('test')).toBeTruthy();
  });
});
