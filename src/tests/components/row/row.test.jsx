import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Row from '../../../components/Row/Row.component';

const videoMock = {
  key: 'key',
  videoId: 'key',
  title: 'Video title',
  description: 'this is a description',
  imageUrl: '',
  isFavorit: 'false',
};

describe('Row component', () => {
  it('Displays the row with the video information', () => {
    const onClick = jest.fn();

    render(
      <HashRouter>
        <Row
          key={videoMock.videoId}
          videoId={videoMock.videoId}
          title={videoMock.title}
          description={videoMock.description}
          imageUrl={videoMock.imageUrl}
          onClick={onClick}
          isFavorit={videoMock}
        />
      </HashRouter>
    );
    expect(screen.getByText('Video title')).toBeTruthy();
  });

  it('Clicks on row and fires event', () => {
    const onClick = jest.fn();
    render(
      <HashRouter>
        <Row
          key={videoMock.videoId}
          videoId={videoMock.videoId}
          title={videoMock.title}
          description={videoMock.description}
          imageUrl={videoMock.imageUrl}
          onClick={onClick}
          isFavorit={videoMock}
        />
      </HashRouter>
    );
    const card = screen.getByRole('heading');
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
