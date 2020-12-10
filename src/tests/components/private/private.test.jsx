import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import Private from '../../../components/Private/Private.component';

describe('Private ', () => {
  it('test the private page  is not rendered when not authenticated', () => {
    const FavoritesPage = () => {
      return <h1 data-testid="value">hi</h1>;
    };
    render(
      <HashRouter>
        <AuthProvider>
          <Switch>
            <Private exact path="/test">
              <FavoritesPage />
            </Private>
          </Switch>
        </AuthProvider>
      </HashRouter>
    );
    const element = screen.queryByText('hi');
    expect(element).not.toBeInTheDocument();
  });
});
