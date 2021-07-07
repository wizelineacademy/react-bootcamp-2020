import React from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import VideoCard from '../VideoCard/VideoCard.component';
import darktheme from '../../utils/Themes/darkTheme';
import { BrowserRouter } from 'react-router-dom';

describe('VideoCard', () => {
  const videoProp = {
    id: 1,
    description: 'description',
    image: 'image.jpd',
    title: 'title',
  };

  it('renders image', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darktheme}>
          <VideoCard video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const image = screen.queryByRole('listitem').children[0].children[0];
    expect(image).toBeTruthy();
  });
  it('renders descrption', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darktheme}>
          <VideoCard video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const dscription = screen.getByText(videoProp.description);
    expect(dscription).toBeTruthy();
  });
  it('renders title', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darktheme}>
          <VideoCard video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const title = screen.getByText(videoProp.title);
    expect(title).toBeTruthy();
  });
});
