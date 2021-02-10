import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './NotFound.page';

describe('NotFound', () => {
  it('Should render the Not Found Page', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.prop('data-testid')).toBeTruthy();
  });
});
