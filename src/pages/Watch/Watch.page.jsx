import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import LayoutTwoColumns from '../../components/Layout/LayoutTwoColumns.component';
import SearchBar from '../../components/SearchBar';
import LoginStatus from '../../components/LoginStatus';
import Video from '../../components/Video';
import RelatedVideos from '../../components/RelatedVideos';

import './Watch.styles.css';

function WatchPage() {
  const { videoId } = useParams();
  const [searchParam, setSearchParam] = useState('');
  return (
    <LayoutFull>
      <SearchBar initSearchQuery={searchParam} onChange={setSearchParam} />
      <LoginStatus />
      <LayoutTwoColumns>
        <Video videoId={videoId} />
        <RelatedVideos videoId={videoId} />
      </LayoutTwoColumns>
    </LayoutFull>
  );
}

export default WatchPage;
