import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Header from './Header.component';

describe('Header', () => {
  const mockStore = configureStore();

  it('Should render the Home button', () => {
    const initialState = {
      auth: {
        authenticated: false,
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'homeButton' }).props().to).toBe('/');
    expect(wrapper.find({ 'data-testid': 'homeButton' }).text()).toBe('Home');
  });

  it('Should render a login button when user is not logged in', () => {
    const initialState = {
      auth: {
        authenticated: false,
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'loginButton' }));
  });

  it('Should hiden login button when user is logged in', () => {
    const initialState = {
      auth: {
        authenticated: true,
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'loginButton' }).exists()).toBeFalsy();
  });

  it('Should show a favorites button when the user is logged in', () => {
    const initialState = {
      auth: {
        authenticated: true,
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'favoritesButton' }).exists()).toBeTruthy();
  });

  it('Should show a logout button when the user is logged in', () => {
    const initialState = {
      auth: {
        authenticated: true,
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<Header store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'logoutButton' }).exists()).toBeTruthy();
  });
});
