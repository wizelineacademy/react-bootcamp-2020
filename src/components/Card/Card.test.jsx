import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card.component';

const cardProps = {
  cardImg: 'https://i.ytimg.com/vi/tutZKLeGrCs/hqdefault.jpg',
  title: "Feelin' good - [upbeat chillhop mix]",
  videoId: 'tutZKLeGrCs',
};

describe('Card', () => {
  it('should render a video card', () => {
    const wrapper = shallow(<Card {...cardProps} />);
    expect(wrapper.find('img').prop('src')).toBe(cardProps.cardImg);
    expect(wrapper.props().to).toBe(`/video/${cardProps.videoId}`);
    expect(wrapper.find('h2').text()).toBe(cardProps.title);
  });
});
