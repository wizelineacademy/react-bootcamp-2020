import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutFull from '../../components/Layout/LayoutFull.component';
import Video from '../../components/Video/Video.component';

import './Watch.styles.css';

function WatchPage() {
  // const [searchQuery, setSearchQuery] = React.useState('');
  const { videoId } = useParams();
  // console.log(videoId);
  return (
    <LayoutFull>
      <Video videoId={videoId} />
    </LayoutFull>
  );
}

export default WatchPage;
