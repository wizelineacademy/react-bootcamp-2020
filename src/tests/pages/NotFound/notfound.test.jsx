import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NotFoundPage from '../../../pages/NotFound/NotFound.page';

describe('Not found page', () => {
  it('Displays the not found page', () => {
    render(
      <HashRouter>
        <NotFoundPage />
      </HashRouter>
    );
    expect(screen.getByText('Please take me home')).toBeTruthy();
  });
});
