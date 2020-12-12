import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App/App.component';
import { SEARCH_TERM_DEFAULT } from '../../utils/constants';

afterEach(cleanup);

describe('Search form', () => {
  it('renders a search box', () => {
    render(<App />);

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('updates search input value on typing', () => {
    render(<App />);

    userEvent.type(screen.getByRole('searchbox'), ' academy');
    expect(screen.getByRole('searchbox')).toHaveValue(`${SEARCH_TERM_DEFAULT} academy`);
  });
});
