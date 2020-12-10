import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../../../components/SearchBox/SearchBox.component';
import VideoProvider from '../../../providers/Video/Video.provider';
import { act } from 'react-dom/test-utils';

describe('Searchbox component', () => {
  it('Displays the searchbox component', () => {
    render(
      <VideoProvider>
        <SearchBox />
      </VideoProvider>
    );
    expect(screen.getByRole('textbox')).toBeTruthy();
  });

  it('updates search box on typing', () => {
    render(
      <VideoProvider>
        <SearchBox />
      </VideoProvider>
    );
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(screen.getByDisplayValue('hello')).toBeTruthy();
  });

  it("triggers the search when 'Enter' key is pressed", () => {
    render(
      <VideoProvider>
        <SearchBox />
      </VideoProvider>
    );

    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });
  });

  it('search on click button', () => {
    render(
      <VideoProvider>
        <SearchBox />
      </VideoProvider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
  });
});
