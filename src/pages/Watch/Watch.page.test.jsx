import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, act } from '@testing-library/react';
import WatchPage from './Watch.page';
import FavoriteProvider from '../../providers/Favorite';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';

const Wraper = ({ children }) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

describe('<WatchPage />', () => {
  const promise = Promise.resolve();
  it('renders without crashing', async () => {
    render(
      <Wraper>
        <WatchPage />
      </Wraper>
    );

    await act(() => promise);
  });
});
