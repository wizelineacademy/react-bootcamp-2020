import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthProvider from '../providers/Auth';
import Search from '../components/Header/Search/Search.component';

describe('Header Component test', () => {
  it('Find input search', () => {
    render(
      <AuthProvider>
        <Search />
      </AuthProvider>
    );

    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('Trigger new search', () => {
    render(
      <AuthProvider>
        <Search />
      </AuthProvider>
    );

    const searchInput = screen.getByPlaceholderText('Search');
    fireEvent.change(searchInput, { target: { value: 'React testing' } });
    expect(searchInput.value).toBe('React testing');
  });
});
