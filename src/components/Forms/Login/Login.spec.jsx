import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './index';
import { AuthProvider } from '../../../contexts/authContext/authContext';
import { ResourceProvider } from '../../../contexts/resourceContext/Resource';

jest.mock('axios');

describe('Testing Login form component', () => {
  test('must render with a logo and must start the usestate hooks and axios', async () => {
    const handleClose = jest.fn(() => null);
    const mockSetState = jest.spyOn(React, 'useState');
    const someCall = { get: jest.fn(() => ({ data: { user: { id: 1 } } })) };
    axios.create.mockResolvedValue(someCall);
    render(
      <HashRouter>
        <ResourceProvider value={{ resources: { login: 'done' } }}>
          <AuthProvider value={{ user: { id: 1 } }}>
            <Route path="*">
              <Login handleClose={handleClose} />
            </Route>
          </AuthProvider>
        </ResourceProvider>
      </HashRouter>
    );
    // const element = screen.getByTestId('buttonText');
    const element = screen.getByTestId('loginFormLogo');
    expect(element).toBeTruthy();
    expect(mockSetState).toHaveBeenCalledTimes(4);
    expect(axios.create).toHaveBeenCalledTimes(1);
  });

  test('must render with 3 fields', async () => {
    const handleClose = jest.fn(() => null);
    const someCall = { get: jest.fn(() => ({ data: { user: { id: 1 } } })) };
    axios.create.mockResolvedValue(someCall);
    render(
      <HashRouter>
        <ResourceProvider value={{ resources: { login: 'done' } }}>
          <AuthProvider value={{ user: { id: 1 } }}>
            <Route path="*">
              <Login handleClose={handleClose} />
            </Route>
          </AuthProvider>
        </ResourceProvider>
      </HashRouter>
    );
    // const element = screen.getByTestId('buttonText');

    let element = screen.getByRole('textbox', { name: /User Name/i });
    expect(element).toBeTruthy();
    element = screen.getByLabelText(/password/i);
    expect(element).toBeTruthy();
    element = screen.getByRole('textbox', { Name: /Sign In/i });
    expect(element).toBeTruthy();
  });
});
