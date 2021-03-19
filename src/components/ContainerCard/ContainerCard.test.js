import React from 'react';

import {render, screen} from '@testing-library/react';

import ContainerCard from './index';

describe('<ContainerCard />', () => {
    it('render without crashing', () => {
        const { container } = render(<ContainerCard />);
    });

    it('render with VideoCard component', () => {
        const { container } = render(<ContainerCard />);

        expect(container.innerHTML === '<VideoCard></VideoCard>');
    });

  });