import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { mount } from '../__mocks__/utils/MountComponent';
import ThemeButton from '../components/ThemeButton/ThemeButton';

describe('Theme Button', () => {
  it('Changes icon on click', () => {
    const { container } = mount(<ThemeButton />);
    const before = container.querySelector('path');
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    const after = container.querySelector('path');
    expect(before).not.toBe(after);
  });
});
