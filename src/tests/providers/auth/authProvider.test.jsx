import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

describe('Auth provider', () => {
  it('Throws an error when not using auth provider', () => {
    const TestComponent = () => {
      return (
        <>
          <h1 data-testid="value">{}</h1>
        </>
      );
    };
    try {
      render(
        <HashRouter>
          <TestComponent />
        </HashRouter>
      );
    } catch (error) {
      expect(error.message).toBe(`Can't use "useAuth" without an AuthProvider!`);
    }
  });
});
