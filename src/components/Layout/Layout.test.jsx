import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout.component';

describe('Layout', () => {
  it('Should render the Layout Component', () => {
    const wrapper = shallow(<Layout>Children</Layout>);
    expect(wrapper.text()).toBe('Children');
  });
});
