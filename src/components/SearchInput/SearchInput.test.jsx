import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput.component';

describe('SearchInput', () => {
  it('renders with initial value', () => {
    render(<SearchInput searchText="wizeline" />);

    expect(screen.getByDisplayValue('wizeline')).toBeTruthy();
  });

  it('triggers change on enter keydown', () => {
    const onChange = jest.fn();
    const searchTerm = 'wizeline';

    render(<SearchInput searchText={searchTerm} onChange={onChange} />);

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Enter' });

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it('does not trigger with different keydown', () => {
    const onChange = jest.fn();
    const searchTerm = 'wizeline';

    render(<SearchInput searchText={searchTerm} onChange={onChange} />);

    fireEvent.keyDown(screen.getByRole('textbox'), { key: 'Space' });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('triggers change on click button', () => {
    const onChange = jest.fn();
    const searchTerm = 'wizeline';

    render(<SearchInput searchText={searchTerm} onChange={onChange} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onChange).toHaveBeenCalledWith(searchTerm);
  });

  it('displays an error on empty search term', () => {
    const onChange = jest.fn();

    render(<SearchInput onChange={onChange} />);

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('error')).toBeTruthy();
  });
});
