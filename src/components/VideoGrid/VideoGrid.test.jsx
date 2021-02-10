import React from 'react';
import { shallow } from 'enzyme';

import VideoGrid from './VideoGrid.component';

const videos = [
  {
    id: '1',
    snippet: {
      title: 'Video Title 1',
      thumbnails: {
        high: {
          url: 'imageUrl',
        },
      },
    },
  },
  {
    id: '2',
    snippet: {
      title: 'Video Title 2',
      thumbnails: {
        high: {
          url: 'imageUrl',
        },
      },
    },
  },
];

describe('VideoGrid', () => {
  it('Should render the Video Grid Component', () => {
    const wrapper = shallow(<VideoGrid videos={videos} />);
    expect(wrapper.find({ 'data-testid': 'videoCard' }).at(0).prop('title')).toBe(
      'Video Title 1'
    );
    expect(wrapper.find({ 'data-testid': 'videoCard' }).at(1).prop('title')).toBe(
      'Video Title 2'
    );
  });
});
