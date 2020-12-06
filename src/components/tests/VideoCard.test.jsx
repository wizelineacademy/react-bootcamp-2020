import React from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import VideoCard from '../VideoCard/VideoCard.component';
import darktheme from '../../utils/Themes/darkTheme';

describe('VideoCard', () => {
  const videoProp = {
    id: 1,
    description: 'description',
    image: 'image.jpd',
    title: 'title',
  };

  it('renders image', () => {
    render(
      <ThemeProvider theme={darktheme}>
        <VideoCard video={videoProp} />
      </ThemeProvider>
    );
    const image = screen.queryByRole('listitem').children[0].children[0];
    expect(image).toBeTruthy();
  });
  it('renders descrption', () => {
    render(
      <ThemeProvider theme={darktheme}>
        <VideoCard video={videoProp} />
      </ThemeProvider>
    );
    const dscription = screen.getByText(videoProp.description);
    expect(dscription).toBeTruthy();
  });
  it('renders title', () => {
    render(
      <ThemeProvider theme={darktheme}>
        <VideoCard video={videoProp} />
      </ThemeProvider>
    );
    const title = screen.getByText(videoProp.title);
    expect(title).toBeTruthy();
  });
});
