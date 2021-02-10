import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import LoginPage from './Login.page';

describe('LoginPage', () => {
  const mockStore = configureStore();
  it('Should render homepage', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const wrapper = shallow(<LoginPage store={store} />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
