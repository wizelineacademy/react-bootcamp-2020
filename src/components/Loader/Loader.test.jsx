/* eslint-disable */
import React from 'react';
import { render } from '@testing-library/react';
import LoaderComponent from './Loader';

describe('Testing Styled Components on LoaderComponent', () => {
  test('Should render the Button component without crashing', () => {
    render(<LoaderComponent />);
  });
});
