import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { mount, mountComponentWithRouter } from '../__mocks__/utils/MountComponent';
import SearchBar from '../components/SearchBar/SearchBar';

describe('SearchBar', () => {
  it('Mount component', () => {
    mount(<SearchBar />);
    expect(screen.getByPlaceholderText('Search…')).toBeTruthy();
  });

  it('Change text in screen when write', () => {
    mount(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(screen.getByDisplayValue('hello')).toBeTruthy();
  });

  it('Key down event with Enter', () => {
    mount(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'CapsLock', code: 'CapsLock' });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByDisplayValue('hello')).toBeTruthy();
  });

  it('Redirect when is outside /', () => {
    const history = createMemoryHistory();
    history.push('/favorites');
    mountComponentWithRouter(<SearchBar />, history);

    expect(history.location.pathname).toBe('/favorites');

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(screen.getByDisplayValue('hello')).toBeTruthy();

    expect(history.location.pathname).toBe('/');
  });
});
