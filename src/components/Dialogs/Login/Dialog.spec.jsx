import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter, Route } from 'react-router-dom';
import Dialog from './Dialog.component';
import { AuthProvider } from '../../../contexts/authContext/authContext';
import { ResourceProvider } from '../../../contexts/resourceContext/Resource';

describe('Testing Dialog component', () => {
  test('must render de component with a title and a content', async () => {
    render(
      <HashRouter>
        <ResourceProvider value={{ resources: { login: 'done' } }}>
          <AuthProvider value={{ user: { id: 1 } }}>
            <Route path="*">
              <Dialog open title="hello world" />
            </Route>
          </AuthProvider>
        </ResourceProvider>
      </HashRouter>
    );
    // const element = screen.getByTestId('buttonText');
    let element = screen.getByTestId('loginDialogTitle');
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('hello world');
    element = screen.getByTestId('loginDialogContent');
    expect(element).toBeTruthy();
  });
});
