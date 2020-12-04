import React from 'react';
import AppBar from '../../components/AppBar';
import VideoGrid from '../../components/VideoGrid';
import { videos } from '../../mock';

export default function HomePage() {
  return (
    <div>
      <AppBar />
      <VideoGrid videos={videos} />
    </div>
  );
}
