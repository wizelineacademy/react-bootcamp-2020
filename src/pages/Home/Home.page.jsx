import React from 'react';
import VideoHomeCard from '../../components/video-home-card';

import './home.styles.scss';

import { SummaryResult } from '../../utils/searchresult';

function HomePage() {
  return (
    <div className='home-container'>
      <div className='videos-container'>
        {SummaryResult.map(({ etag, ...otherItemProps }) => (
          <VideoHomeCard key={etag} {...otherItemProps} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
