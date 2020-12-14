import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar.component';
import SearchProvider from '../../providers/Search';

const Wraper = ({ children }) => {
  return <SearchProvider>{children}</SearchProvider>;
};

describe('<SearchBar />', () => {
  it('renders without crashing', () => {
    render(
      <Wraper>
        <SearchBar />
      </Wraper>
    );
  });
});
