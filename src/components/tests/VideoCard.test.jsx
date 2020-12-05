import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard.component';
import darktheme from '../../utils/Themes/darkTheme';
import { Card } from '../VideoCard/VideoCard.styles';

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
    const image = screen.queryByRole("listitem").children[0].children[0];
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

  it('handles on click', () => {
    const onCLick = jest.fn();
    render(
      <BrowserRouter>
        <ThemeProvider theme={darktheme}>
          <Card onClick={onCLick} />
        </ThemeProvider>
      </BrowserRouter>
    );

    const card = screen.getByRole('listitem');
    fireEvent.click(card);
    expect(onCLick).toHaveBeenCalledTimes(1);
  });
});
