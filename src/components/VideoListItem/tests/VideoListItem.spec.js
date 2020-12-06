import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoListItem from '../VideoListItem.component';

describe('render examples', () => {
  it('renders frist React Component', () => {
    render(<BrowserRouter><VideoListItem id="1" title="test" author="test" img="imge_text" onClick={jest.fn()}/></BrowserRouter>);
    expect(screen.getByText('test')).toBeTruthy();
  });
});
