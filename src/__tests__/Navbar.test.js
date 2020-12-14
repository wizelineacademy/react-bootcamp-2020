import React from 'react';

import Navbar from '../components/Navbar/Navbar';

import { mount } from '../__mocks__/utils/MountComponent';

describe('Navbar', () => {
  it('Mount Navbar', () => {
    mount(<Navbar />);
  });
});
