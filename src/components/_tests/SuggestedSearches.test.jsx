import React from 'react';
import { HashRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import SuggestedSearches from '../SuggestedSearches';

describe('suggested searches component', () => {
  it('test render of the text', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <SuggestedSearches />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getByText('Try this searches:')).toBeInTheDocument();
  });

  it('test render of the list of suggested searches', () => {
    render(
      <HashRouter>
        <AuthProvider>
          <SuggestedSearches />
        </AuthProvider>
      </HashRouter>
    );
    expect(screen.getAllByRole('link').length).toBe(3);
  });
});
