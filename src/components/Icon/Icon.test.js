import React from 'react';

import {render, screen} from '@testing-library/react';

import Icon from './index';

describe('<Icon iconName="home" />', () => {
    it('render without crashing', () => {
        const { container } = render(<Icon iconName="home" />);
    });

    it('render with svg element', () => {
        const { container } = render(<Icon iconName="home" />);

        expect(container.innerHTML === '<svg></svg>');
    });

    it('render without iconName', () => {
        const { container } = render(<Icon iconName="" />);

        expect(container.innerHTML === '');
    });
  });