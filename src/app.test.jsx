import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('When everything is OK', () => {
  test('Should render the App component without crashing', () => {
    render(<App />);
  });
});
