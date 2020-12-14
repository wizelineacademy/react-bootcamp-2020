import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import FavoriteButton from './FavoriteButton.componenet';
import AuthProvider, { useAuth } from '../../providers/Auth';

const Wraper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const UserLoggedIn = ({ children }) => {
  const { login } = useAuth();

  useEffect(() => {
    login('wizeline', 'Rocks!');
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};

describe('<FavoriteButton />', () => {
  it('renders without crashing', () => {
    render(
      <Wraper>
        <FavoriteButton />
      </Wraper>
    );
  });

  it('renders blank component if not logged in', () => {
    const { container } = render(
      <Wraper>
        <FavoriteButton />
      </Wraper>
    );

    expect(container.innerHTML === '<div></div>');
  });

  it('renders favorite button if user is logged in', () => {
    const { queryByRole } = render(
      <Wraper>
        <UserLoggedIn>
          <FavoriteButton />
        </UserLoggedIn>
      </Wraper>
    );

    expect(queryByRole('button')).toBeVisible();
  });
});
