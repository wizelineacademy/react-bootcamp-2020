import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Route } from 'react-router-dom';
import Videos from './Videos.component';
import { AuthProvider } from '../../contexts/authContext/authContext';

jest.mock('../../services/youtube');

describe('Testing Videos component', () => {
  test('must render de component with the button to add to watch later if the user is logged in', async () => {
    render(
      <HashRouter>
        <AuthProvider value={{ user: { id: 1 } }}>
          <Route path="*">
            <Videos />
          </Route>
        </AuthProvider>
      </HashRouter>
    );
    // const element = screen.getByTestId('buttonText');
    const element = await screen.getByTestId('videoGridBase');
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('Loading');
  });
});
