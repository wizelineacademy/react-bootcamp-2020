import React from 'react';

import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import lightTheme from '../../utils/Themes/lightTheme';
import { BrowserRouter } from 'react-router-dom';

describe('VideoCardSmall', () => {
  const videoProp = {
    id: 1,
    description: 'description',
    image: 'image.jpd',
    title: 'title',
  };

  it('renders image', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <VideoCardSmall video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const image = screen.queryByRole('listitem').children[0].children[0];
    expect(image).toBeTruthy();
  });
  it('renders descrption', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <VideoCardSmall video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const dscription = screen.queryByText(videoProp.description);
    expect(dscription).toBeFalsy();
  });
  it('renders title', () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={lightTheme}>
          <VideoCardSmall video={videoProp} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const title = screen.getByText(videoProp.title);
    expect(title).toBeTruthy();
  });
});
