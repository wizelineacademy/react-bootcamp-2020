import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput.component';

const mockOnChange = jest.fn();

describe('TextInput', () => {
  it('Should render a text type input', () => {
    const wrapper = shallow(
      <TextInput
        placeholder="Testing"
        className="testClass"
        value="testValue"
        onChange={mockOnChange}
      />
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('placeholder')).toBe(
      'Testing'
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('className')).toBe(
      'testClass'
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('value')).toBe(
      'testValue'
    );
    wrapper
      .find({ 'data-testid': 'inputComponent' })
      .simulate('change', { target: { value: 'a' } });
    expect(mockOnChange.mock.calls.length).toBe(1);
  });

  it('Should render a password type input', () => {
    const wrapper = shallow(
      <TextInput
        placeholder="Testing"
        className="testClass"
        value="testValue"
        password
        onChange={mockOnChange}
      />
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('placeholder')).toBe(
      'Testing'
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('className')).toBe(
      'testClass'
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('value')).toBe(
      'testValue'
    );
    expect(wrapper.find({ 'data-testid': 'inputComponent' }).prop('type')).toBe(
      'password'
    );
    wrapper
      .find({ 'data-testid': 'inputComponent' })
      .simulate('change', { target: { value: 'a' } });
    expect(mockOnChange.mock.calls.length).toBe(2);
  });
});
