import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container.component';

describe('Container', () => {
  it('should render the Container Component', () => {
    const wrapper = shallow(<Container>Children</Container>);
    expect(wrapper.text()).toBe('Children');
  });
});
