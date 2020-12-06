import React from 'react';

import { render, screen} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import VideoCardSmall from '../VideoCardSmall/VideoCardSmall.component';
import lightTheme from '../../utils/Themes/lightTheme';

describe('VideoCardSmall', () => {
  const videoProp = {
    id: 1,
    description: 'description',
    image: 'image.jpd',
    title: 'title',
  };

  it('renders image', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <VideoCardSmall video={videoProp} />
      </ThemeProvider>
    );
    const image = screen.queryByRole('listitem').children[0].children[0];
    expect(image).toBeTruthy();
  });
  it('renders descrption', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <VideoCardSmall video={videoProp} />
      </ThemeProvider>
    );
    const dscription = screen.queryByText(videoProp.description);
    expect(dscription).toBeFalsy();
  });
  it('renders title', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <VideoCardSmall video={videoProp} />
      </ThemeProvider>
    );
    const title = screen.getByText(videoProp.title);
    expect(title).toBeTruthy();
  });
});
