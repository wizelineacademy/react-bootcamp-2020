import React from 'react';

import {render, screen} from '@testing-library/react';

import SearchBox from './index';

describe('<SearchBox />', () => {
    
    it('render without crashing', () => {
        const { container } = render(<SearchBox />);
    });

    it('render with Icon component', () => {
        const { container } = render(<SearchBox />);

        expect(container.innerHTML === '<Icon></Icon>');
    });

    it('render with input tag', () => {
        const { container } = render(<SearchBox />);

        expect(container.innerHTML === '<input />');
    });

  });