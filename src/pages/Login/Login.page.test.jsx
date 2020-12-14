import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, act, fireEvent } from '@testing-library/react';
import LoginPage from './Login.page';
import FavoriteProvider from '../../providers/Favorite';
import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

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

describe('<LoginPage />', () => {
  const promise = Promise.resolve();
  it('renders without crashing', async () => {
    render(
      <Wraper>
        <LoginPage />
      </Wraper>
    );

    await act(() => promise);
  });

  it('returns to homepage upon successful login', async () => {
    const { queryByRole } = render(
      <Wraper>
        <LoginPage />
      </Wraper>
    );

    fireEvent.click(queryByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalled();
    await act(() => promise);
  });
});
