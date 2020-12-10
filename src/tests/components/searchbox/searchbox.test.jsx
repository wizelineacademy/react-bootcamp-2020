import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../components/SearchBox/SearchBox.component';
import VideoProvider from '../../../providers/Video/Video.provider';

describe('Searchbox component', () => {
  it('Displays the searchbox component', () => {
    render(
      <VideoProvider>
        <SearchBox />
      </VideoProvider>
    );
    expect(screen.getByRole('textbox')).toBeTruthy();
  });
});
