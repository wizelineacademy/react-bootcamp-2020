import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import HomePage from './Home.page';

describe('HomePage', () => {
  const mockStore = configureStore([thunk]);
  it('Should render a welcome message when the user is logged in', () => {
    const initialState = {
      auth: {
        authenticated: true,
        user: {
          name: 'Oswaldo',
        },
      },
      videos: {
        videos: [],
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<HomePage store={store} />)
      .dive()
      .dive();
    expect(wrapper.find({ 'data-testid': 'homepageTitle' }).exists()).toBeTruthy();
  });
});
