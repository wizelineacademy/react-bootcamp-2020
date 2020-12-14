import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import User from './User.component';
import AuthProvider, { useAuth } from '../../providers/Auth';

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
      <AuthProvider>{children}</AuthProvider>
    </BrowserRouter>
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
        <User />
      </Wraper>
    );
  });

  it('shows login when there is no user', () => {
    const { queryByText } = render(
      <Wraper>
        <User />
      </Wraper>
    );

    expect(queryByText(/Login/)).toBeVisible();
  });

  it('redirects to login page when click on Login button', () => {
    const { queryByText } = render(
      <Wraper>
        <User />
      </Wraper>
    );

    fireEvent.click(queryByText(/Login/));
    expect(mockHistoryPush).toHaveBeenCalled();
  });

  it('shows user info when logged in', () => {
    const { queryByAltText } = render(
      <Wraper>
        <UserLoggedIn>
          <User />
        </UserLoggedIn>
      </Wraper>
    );

    expect(queryByAltText(/wizeline/)).toBeVisible();
  });

  it('redirects to logout when user is logged in', () => {
    const { queryByAltText } = render(
      <Wraper>
        <UserLoggedIn>
          <User />
        </UserLoggedIn>
      </Wraper>
    );
    fireEvent.click(queryByAltText(/wizeline/));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
