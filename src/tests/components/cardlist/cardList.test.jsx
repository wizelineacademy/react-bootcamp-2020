import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import CardList from '../../../components/Cardlist/CardList.component';

const videosMock = [
  {
    key: 'key',
    videoId: 'key',
    title: 'Video title',
    description: 'this is a description',
    imageUrl: '',
    isFavorit: 'false',
  },
  {
    key: 'key2',
    videoId: 'key2',
    title: 'Video title 2',
    description: 'this is a description 2',
    imageUrl: '',
    isFavorit: 'false',
  },
];

describe('Card list component', () => {
  it('Displays the cards with the videos information', () => {
    render(
      <HashRouter>
        <CardList videos={videosMock} isFavorit={false} />
      </HashRouter>
    );

    expect(screen.getAllByRole('heading').length).toBe(2);
  });
});
