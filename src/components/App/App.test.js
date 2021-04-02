import React from 'react';

import { render } from '@testing-library/react';

import App from './index';

describe('<App />', () => {
  it('render without crashing', () => {
    const { container } = render(<App />);
    expect(container.innerHTML === '<HomePage>');
  });
});
