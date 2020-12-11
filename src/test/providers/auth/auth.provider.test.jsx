import React, { useContext } from 'react';
import { render, within, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import AuthProvider, { AuthContext } from '../../../providers/auth';
import { setCurrentAuth } from '../../../providers/auth/auth.actions';

const authMock = {
  createdAt: new Date(),
  displayName: 'Name 1',
  email: 'mail1@mail.com',
  id: 'id1',
};

describe('Auth provider', () => {
  it('Set default auth provider value', () => {
    const TestComponent = () => {
      const { authState } = useContext(AuthContext);

      return <div data-testid='authId'>{`${authState.currentAuth}`}</div>;
    };

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const { getByText } = within(getByTestId('authId'));
    expect(getByText('null')).toBeInTheDocument();
  });

  it('Assign an auth', () => {
    const TestComponent = () => {
      const { authState, authDispatch } = useContext(AuthContext);
      const name = authState.currentAuth ? authState.currentAuth.displayName : '';
      const handleChangeAuth = () => {
        authDispatch(setCurrentAuth(authMock));
      };

      return (
        <>
          <p data-testid='authName'>{`${name}`}</p>
          <button
            type='button'
            data-testid='changeAuthButton'
            onClick={handleChangeAuth}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const { getByText } = within(getByTestId('authName'));
    expect(getByText('')).toBeInTheDocument();
    const changeAuthButton = screen.getByTestId('changeAuthButton');
    act(() => {
      fireEvent.click(changeAuthButton);
    });
    expect(getByText('Name 1')).toBeInTheDocument();
  });

  it('Try to assign a invalid reducer action', () => {
    const TestComponent = () => {
      const { authState, authDispatch } = useContext(AuthContext);
      const name = authState.currentAuth ? authState.currentAuth.displayName : '';
      const handleChangeAuth = () => {
        authDispatch({
          type: 'INVALID_ACTION',
          payload: authMock,
        });
      };

      return (
        <>
          <p data-testid='authName'>{`${name}`}</p>
          <button
            type='button'
            data-testid='changeAuthButton'
            onClick={handleChangeAuth}
          ></button>
        </>
      );
    };

    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const { getByText } = within(getByTestId('authName'));
    expect(getByText('')).toBeInTheDocument();
    const changeAuthButton = screen.getByTestId('changeAuthButton');
    act(() => {
      fireEvent.click(changeAuthButton);
    });
    expect(getByText('')).toBeInTheDocument();
  });
});
