import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button.component';

describe('Button', () => {
  it('renders a button with text', () => {
    const wrapper = shallow(<Button>Login</Button>);
    expect(wrapper.text()).toBe('Login');
  });
});
