import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

const mockVideo = {
  id: '5Z_3BbJjhvE',
  title: 'THE BABY OTTERS ARE ALL GROWN UP !!',
  publishedAt: '06/04/2020',
  thumbnail: 'https://i.ytimg.com/vi/5Z_3BbJjhvE/mqdefault.jpg',
};

it('Card renders image', () => {
  render(<Card video={mockVideo} />);
  expect(screen.getByRole('img')).toHaveAttribute('src');
});

it('Card renders title', () => {
  render(<Card video={mockVideo} />);
  expect(screen.getByText('THE BABY OTTERS ARE ALL GROWN UP !!')).toBeInTheDocument();
});

it(`Card's image has alt attribute`, () => {
  render(<Card video={mockVideo} />);
  expect(screen.getByAltText('THE BABY OTTERS ARE ALL GROWN UP !!')).toBeInTheDocument();
});
