import React, { useContext } from 'react';
import { HashRouter } from 'react-router-dom';
import { render, within, fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useAuth } from '../../../providers/Auth/Auth.provider';

import AuthProvider from '../../../providers/Auth/Auth.provider';

describe('Auth provider', () => {
  it('sets  ', () => {
    const TestComponent = () => {
      const { login } = useAuth();
      return (
        <>
          <h1 data-testid="value">{searchTerm}</h1>
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
