/* eslint-disable */
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AuthProvider from '../../providers/Auth/Auth.provider';
import Private from './Private';

describe('Testing Styled Components on Private Component', () => {
  test('Should not render Private Childs when not Authenticated', () => {
    const ExamplePage = () => {
      return <h1>Hello World!</h1>;
    };

    render(
      <BrowserRouter>
        <AuthProvider>
          <Private exact path="/">
            <ExamplePage />
          </Private>
        </AuthProvider>
      </BrowserRouter>
    );
    const element = screen.queryByText('Hello World!');
    expect(element).not.toBeInTheDocument();
  });
});
