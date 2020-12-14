import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import FavoritesToggle from './FavoritesToggle.component';
import AuthProvider, { useAuth } from '../../providers/Auth';
import FavoriteProvider from '../../providers/Favorite';

const Wraper = ({ children }) => {
  return (
    <FavoriteProvider>
      <AuthProvider>{children}</AuthProvider>
    </FavoriteProvider>
  );
};

const UserLoggedIn = ({ children }) => {
  const { login } = useAuth();

  useEffect(() => {
    login('wizeline', 'Rocks!');
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

describe('<User />', () => {
  it('renders without crashing', () => {
    render(
      <Wraper>
        <FavoritesToggle />
      </Wraper>
    );
  });

  it('renders blank component if not logged in', () => {
    const { container } = render(
      <Wraper>
        <FavoritesToggle />
      </Wraper>
    );

    expect(container.innerHTML === '<div></div>');
  });

  it('renders favorite toggle if user is logged in', () => {
    const { queryByText } = render(
      <Wraper>
        <UserLoggedIn>
          <FavoritesToggle />
        </UserLoggedIn>
      </Wraper>
    );

    expect(queryByText(/Favorites/)).toBeVisible();
  });
});
