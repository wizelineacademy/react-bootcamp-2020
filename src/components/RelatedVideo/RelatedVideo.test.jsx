import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedVideo from './RelatedVideo.component'

const mockVideo = {
  id: '5Z_3BbJjhvE',
  title: 'THE BABY OTTERS ARE ALL GROWN UP !!',
  publishedAt: '06/04/2020',
  thumbnail: 'https://i.ytimg.com/vi/5Z_3BbJjhvE/mqdefault.jpg',
}

const relatedVideo = <RelatedVideo video={mockVideo} />

it('Related Video renders video title', () => {
  render(relatedVideo)
  expect(screen.getByText('THE BABY OTTERS ARE ALL GROWN UP !!')).toBeInTheDocument()
})

it('Related Video renders image', () => {
  render(relatedVideo)
  expect(screen.getByRole('img')).toBeInTheDocument()
})

it('Related Video image has alt attribute', () => {
  render(relatedVideo)
  expect(screen.getByAltText('THE BABY OTTERS ARE ALL GROWN UP !!')).toBeInTheDocument()
})