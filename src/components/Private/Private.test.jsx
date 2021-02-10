import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import Private from './Private.component';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('Private', () => {
  const mockStore = configureStore();
  it('Should redirect if user is not authenticated', () => {
    const initialState = {
      auth: {
        authenticated: false,
      },
    };
    const store = mockStore(initialState);
    const props = { path: '/favorites' };
    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <Private store={store} />
      </MemoryRouter>
    );

    expect(enzymeWrapper.find({ 'data-testid': 'redirect' }).exists()).toBeTruthy();
  });

  it('Should show child component when user is authenticated', () => {
    const initialState = {
      auth: {
        authenticated: true,
      },
    };
    const props = { path: '/favorites' };
    const store = mockStore(initialState);
    const enzymeWrapper = mount(
      <MemoryRouter initialEntries={[props.path]}>
        <Private store={store} />
      </MemoryRouter>
    );
    expect(enzymeWrapper.find({ 'data-testid': 'redirect' }).exists()).toBeFalsy();
  });
});
