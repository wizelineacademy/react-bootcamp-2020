import React from 'react';

import {render, screen} from '@testing-library/react';

import VideoCard from './index';
let data = require('../../utils/mock/youtube-videos-mock.json');

describe('<SearchBox />', () => {
    it('render without crashing', () => {
        const { container } = render(<VideoCard />);
    });

    it('render with img tag', () => {
        const { container } = render(<VideoCard />);

        expect(container.innerHTML === '<img />');
    });

    it('render with h6 tag', () => {
        const {snippet} = data.items[0];
        const { container, queryByText } = render(<VideoCard
            key={snippet.etag}
            title={snippet.title}
            description={snippet.description}
            thumbnail={snippet.thumbnails.high.url}
        />);

        expect(container.innerHTML === '<h6></h6>');

        expect(queryByText(snippet.title)).toBeVisible();
        expect(queryByText(snippet.description)).toBeVisible();
    });

  });