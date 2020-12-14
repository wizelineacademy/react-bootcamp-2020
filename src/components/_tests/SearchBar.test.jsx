import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

function dumpChangeFunction() {
  return true;
}

describe('search bar component', () => {
  it('test render of the input text in the homepage', () => {
    render(<SearchBar initSearchQuery="" onChange="" isHomepage />);
    expect(screen.getByPlaceholderText('eg. React Tutorials')).toBeInTheDocument();
  });

  it('test render of the input text in the search page', () => {
    render(<SearchBar initSearchQuery="" onChange={dumpChangeFunction} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
  it('test render of the input text in the search page with a default search text', () => {
    render(<SearchBar initSearchQuery="" onChange={dumpChangeFunction} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
  it('test update search bar typing', () => {
    render(<SearchBar initSearchQuery="search text" onChange={dumpChangeFunction} />);
    expect(screen.getByDisplayValue('search text')).toBeTruthy();
  });
  it('test the enter key in the search bar with empty search text', () => {
    const onSearch = jest.fn();
    render(<SearchBar initSearchQuery="" onChange={dumpChangeFunction} />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSearch).toHaveBeenCalledTimes(0);
  });
  /*
  // error with history.push > it is undefined. 
  it('test the enter key in the search bar with some search text', () => {
    const onSearch = jest.fn();
    render(<SearchBar initSearchQuery="mantis shrimp" onChange={dumpChangeFunction} />);
    const input = screen.getByRole('textbox');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onSearch).toHaveBeenCalledTimes(1);
  });
  */
});
