import React from 'react';
import { shallow } from 'enzyme';

import Title from './Title.component';

describe('Title', () => {
  it('Should render a Title Component', () => {
    const wrapper = shallow(<Title>Mock Title</Title>);
    expect(wrapper.contains('Mock Title')).toBeTruthy();
  });
});
