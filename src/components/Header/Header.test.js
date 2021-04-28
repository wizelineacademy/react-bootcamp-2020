import React from 'react';

import { render } from '@testing-library/react';

import Header from './index';

describe('<Header />', () => {
  it('render without crashing', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML === '<header></header>');
  });

  it('render with header element', () => {
    const { container } = render(<Header />);

    expect(container.innerHTML === '<header></header>');
  });

  it('render with IconComponent', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML === 'Icon');
  });

  it('render with IconComponent', () => {
    const { container } = render(<Header />);
    expect(container.innerHTML === '<SearchBox></SearchBox>');
  });
});
