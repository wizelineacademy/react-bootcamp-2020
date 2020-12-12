import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App/App.component';
import SearchContext from '../../state/SearchContext';
import SearchForm from './SearchForm.component';
import { SEARCH_TERM_DEFAULT } from '../../utils/constants';

afterEach(cleanup);

describe('Search form', () => {
  it('updates search input value on typing', () => {
    render(
      <App>
        <SearchContext>
          <SearchForm />
        </SearchContext>
      </App>
    );

    userEvent.type(screen.getByRole('searchbox'), ' academy');
    expect(screen.getByRole('searchbox')).toHaveValue(`${SEARCH_TERM_DEFAULT} academy`);
  });
});
