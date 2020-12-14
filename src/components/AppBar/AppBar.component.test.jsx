import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import FavoritesProvider from '../../providers/Favorite';
import App from './AppBar.component';

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <SearchProvider>
          <AuthProvider>{children}</AuthProvider>
        </SearchProvider>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

describe('<App />', () => {
  it('renders without crashing', () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
  });

  it('shows application title', () => {
    const { queryByText } = render(
      <Wrapper>
        <App />
      </Wrapper>
    );

    expect(queryByText(/Favorites/)).toBeVisible();
  });
});
