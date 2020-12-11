import React, { useEffect } from 'react';
import { render } from '@testing-library/react';
import Favorites from '../../pages/Favorites';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider, { useAuth } from '../../providers/Auth';
import UserData from '../../providers/AppData';

import Private from '../Private';

describe("Private", () => {
  it('dosent renders if not auth', () => {

    const TestComponent = ({ children }) => {
      const { logout } = useAuth();
      useEffect(() => {
        logout()
      }, [logout])
      return (<div>{children}</div>);

    }
    const { container } = render(
      <BrowserRouter>
        <UserData>
          <AuthProvider>
            <TestComponent>
              <Private>
                <Favorites />
              </Private>
            </TestComponent>
            </AuthProvider>
        </UserData>
      </BrowserRouter>
    );

    const selector = container.querySelector('section');

    expect(selector).toBeFalsy();
  });

  it('it renders if', () => {

    const TestComponent = ({ children }) => {
      const { login } = useAuth();
      useEffect(() => {
        login();
      }, [login])
      return (<div>{children}</div>);

    }
    const { container } = render(
      <BrowserRouter>
        <UserData>
          <AuthProvider>
            <TestComponent>
              <Private>
                <Favorites />
              </Private>
            </TestComponent>
          </AuthProvider>
        </UserData>
      </BrowserRouter>
    );

    const selector = container.querySelector('section');

    expect(selector).toBeTruthy();
  });

})