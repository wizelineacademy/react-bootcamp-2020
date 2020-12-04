import React from 'react';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';
import { videos } from '../../mock';

export default function HomePage() {
  return (
    <React.Fragment>
      <AppBar />
      <VideoGrid videos={videos} />
    </React.Fragment>
  );
}
