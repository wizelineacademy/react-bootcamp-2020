import React from 'react';
import { render } from '@testing-library/react';
import VideoDisplay from './VideoDisplay.component';
import { videos } from '../../constants/mock';

describe('<VideoWatch />', () => {
  it('renders without crashing', () => {
    const video = videos[0];

    render(<VideoDisplay video={video} />);
  });

  it('shows the full video title', () => {
    const video = videos[0];

    const { queryByText } = render(<VideoDisplay video={video} />);

    expect(queryByText(video.snippet.title)).toBeVisible();
  });

  it('shows loading when video is not present', () => {
    const { queryByText } = render(<VideoDisplay video={null} />);

    expect(queryByText(/Loading/)).toBeVisible();
  });
});
